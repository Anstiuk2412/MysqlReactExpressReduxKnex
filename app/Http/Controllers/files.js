import {
  openFolder,
  openHomeFolder,
} from '../../../lib/helper/workWithFilesAndFolders/openFolder.js';

export const filesAndFoldersAtFolder = async (req, res) => {
  // * get User id
  const userId = req.user._statements[0].value;
  // * get folder id
  const folderId = req.params.folder_id;
  if (folderId === 'undefined') {
    // * If user at Home folder
    const { userFiles, childFolders } = await openHomeFolder(userId);
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
