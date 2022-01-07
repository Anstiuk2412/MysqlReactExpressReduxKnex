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

export const getPathToParentFolder = async (req, res) => {
  // * get User id
  const userId = req.user.user_id;
  // * get folder id
  const folderId = req.params.folder_id;
  // eslint-disable-next-line camelcase
  const folderInfo = await folders.selectFirst({
    // eslint-disable-next-line camelcase
    user_id: userId,
    id: folderId,
  });
  const progenitorFolderId = await folders.selectFirst({
    // eslint-disable-next-line camelcase
    user_id: userId,
    id: folderInfo.parent_id,
  });
  // * if next folder haven`t parent folder create home url '/'
  if (!progenitorFolderId.parent_id) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(
      JSON.stringify({
        data: {
          // eslint-disable-next-line camelcase
          path: '/',
        },
      }),
    );
    return;
  }
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(
    JSON.stringify({
      data: {
        // eslint-disable-next-line camelcase
        path: `${folderInfo.parent_id}`,
      },
    }),
  );
};
