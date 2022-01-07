import { openFolder } from '../../../lib/helper/workWithFilesAndFolders/openFolder.js';
import { folders } from '../../../database/models/folder.js';

export const filesAndFoldersAtFolder = async (req, res) => {
  // * get User id
  const userId = req.user.user_id;
  // * get folder id
  const folderId = req.params.folder_id;
  if (folderId === 'undefined') {
    // * If user at Home folder
    const homeFolderId = await folders.selectFirst({
      user_id: userId,
      parent_id: null,
    });
    const { userFiles, childFolders } = await openFolder(
      userId,
      homeFolderId.id,
    );
    if (userFiles[0]) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(
        JSON.stringify({ data: { files: userFiles, folders: childFolders } }),
      );
    } else {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(
        JSON.stringify({
          data: {
            files: userFiles,
            folders: childFolders,
            message: ['The folder is empty'],
          },
        }),
      );
    }
    return;
  }
  // * If user not at Home folder get all Files
  const { userFiles, childFolders } = await openFolder(userId, folderId);
  if (userFiles[0]) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(
      JSON.stringify({ data: { files: userFiles, folders: childFolders } }),
    );
  } else {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(
      JSON.stringify({
        data: {
          files: userFiles,
          folders: childFolders,
          message: ['The folder is empty'],
        },
      }),
    );
  }
};

export const generatorBreadcrumbs = async (req, res) => {
  // * get user Id
  const userId = req.user.user_id;
  // * get folder id
  const folderId = req.params.folder_id;
  // * breadcrumbs
  const breadcrumbs = [];
  // * folderInfo helped to get main folder parent_id
  let folderInfo = await folders.selectFirst({
    // eslint-disable-next-line camelcase
    user_id: userId,
    id: folderId,
  });
  breadcrumbs.push(folderInfo);
  // * while folder have parent_id add to breadcrumb
  while (folderInfo.parent_id) {
    const progenitorFolderId = await folders.selectFirst({
      // eslint-disable-next-line camelcase
      user_id: userId,
      id: folderInfo.parent_id,
    });
    breadcrumbs.push(progenitorFolderId);
    folderInfo = progenitorFolderId;
  }
  // * revers to get array from parent folder.
  // * deleted last element because it is home folder.
  breadcrumbs.reverse().shift();
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(
    JSON.stringify({
      data: {
        breadcrumbs: breadcrumbs,
      },
    }),
  );
};
