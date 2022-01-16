import { openFolder } from '../../../lib/helper/workWithFilesAndFolders/openFolder.js';
import { folders } from '../../../database/models/folder.js';

export const filesAndFoldersAtFolder = (req, res) => {
  // * get User id
  const userId = req.user.user_id;
  // * get folder id
  const folderId =
    req.params.folder_id === 'undefined'
      ? { parent_id: null }
      : { id: req.params.folder_id };
  const getFolderConds = {
    user_id: userId, // * always exists
    ...folderId,
  };
  // * get Folder info
  folders.selectFirst(getFolderConds).then((mainFolder) => {
    // * get files at mainFolder and folder at mainFolder
    openFolder(userId, mainFolder.id).then(({ userFiles, childFolders }) => {
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
              parent_id: mainFolder.parent_id,
            },
          }),
        );
      }
    });
  });
};
