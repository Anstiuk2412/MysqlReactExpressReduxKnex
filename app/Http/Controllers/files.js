import { openFolder } from '../../../lib/helper/workWithFilesAndFolders/openFolder.js';
import { folders } from '../../../database/models/folder.js';

export const filesAndFoldersAtFolder = async (req, res) => {
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
  const { id: mainFolderId, parent_id: mainFolderParentId } =
    await folders.selectFirst(getFolderConds);
  // * get files at mainFolder and folder at mainFolder
  const filesAndFolders = await openFolder(userId, mainFolderId);
  // * add parent_id to filesAndFolders
  filesAndFolders.mainFolderParentId = mainFolderParentId;
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(
    JSON.stringify({
      data: {
        filesAndFolders,
      },
    }),
  );
};
