import { openFolder } from '../../../lib/helper/workWithFilesAndFolders/openFolder.js';
import { folders } from '../../../database/models/folder.js';

export const filesAndFoldersAtFolder = async (req, res) => {
  // * get User id
  const userId = req.user.user_id;
  // * get folder id
  let mainFolder = await folders.selectFirst({
    // eslint-disable-next-line camelcase
    user_id: userId,
    id: req.params.folder_id,
  });
  if (!mainFolder) {
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
  // ! This query solves the problem with URL.
  // ! If the user goes back to the home folder he should see this '/'
  // ! and not this '/folder/${folder_id}'
  const parentFolder = await folders.selectFirst({
    user_id: userId,
    id: mainFolder.parent_id,
  });
  if (parentFolder && !parentFolder.parent_id) {
    mainFolder.parent_id = null;
  }
  // * If user not at Home folder get all Files
  const { userFiles, childFolders } = await openFolder(userId, mainFolder.id);
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(
    JSON.stringify({
      data: {
        files: userFiles,
        folders: childFolders,
        parent_id: mainFolder.parent_id,
      },
    }),
  );
};
