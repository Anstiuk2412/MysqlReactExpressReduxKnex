import { openFolder } from '../../../lib/helper/workWithFilesAndFolders/openFolder.js';
import { folders } from '../../../database/models/folder.js';

export const filesAndFoldersAtFolder = async (req, res) => {
  // * Get User id
  const userId = req.user.user_id;
  // * Get values of main folder
  let mainFolder = await folders.selectFirst(
    req.params.folder_id === 'undefined'
      ? {
          // * If it's main folder
          user_id: userId,
          parent_id: null,
        }
      : {
          // * If it's child folder
          user_id: userId,
          id: req.params.folder_id,
        },
  );
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
