import { folders } from '../../../database/models/folder.js';

export const allFolders = async (req, res) => {
  //get User id
  const userId = req.user._statements[0].value;
  //get all Files
  const userFolders = await folders.selectAll({
    // eslint-disable-next-line camelcase
    user_id: userId,
    // eslint-disable-next-line camelcase
    parent_id: 0,
  });
  if (!userFolders) {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify('You haven`t any folder'));
  } else {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(userFolders));
  }
};

export const foldersAtFolder = async (req, res) => {
  //get User id
  const userId = req.user._statements[0].value;
  //get parent folder id
  const parentFolderId = req.params.id;
  //get all folder at parent folder
  const childFolders = await folders.selectAll({
    // eslint-disable-next-line camelcase
    parent_id: parentFolderId,
    // eslint-disable-next-line camelcase
    user_id: userId,
  });
  if (!childFolders) {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify('Folder haven`t any folder'));
  } else {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(childFolders));
  }
};
