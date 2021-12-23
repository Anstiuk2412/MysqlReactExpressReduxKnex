import { files } from '../../../database/models/file.js';
import { folders } from '../../../database/models/folder.js';

export const filesAndFoldersAtFolder = async (req, res) => {
  //get User id
  const userId = req.user._statements[0].value;
  //get folder id
  const folderId = req.params.folder_id;
  //get all Files
  const userFiles = await files.selectAll({
    // eslint-disable-next-line camelcase
    user_id: userId,
    // eslint-disable-next-line camelcase
    folder_id: folderId,
  });
  const childFolders = await folders.selectAll({
    // eslint-disable-next-line camelcase
    parent_id: folderId,
    // eslint-disable-next-line camelcase
    user_id: userId,
  });
  if (userFiles[0]) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(
      JSON.stringify({ files: userFiles, folders: childFolders, message: '' }),
    );
  } else {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(
      JSON.stringify({
        files: userFiles,
        folders: childFolders,
        message: 'The folder is empty',
      }),
    );
  }
};
