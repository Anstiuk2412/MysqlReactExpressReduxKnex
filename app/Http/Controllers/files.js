import { files } from '../../../database/models/file.js';

export const allFiles = async (req, res) => {
  //get User id
  const userId = req.user._statements[0].value;
  //get all Files
  // eslint-disable-next-line camelcase
  const userFiles = await files.selectAll({ user_id: userId });
  if (!userFiles) {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify('Files is empty'));
  } else {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(userFiles));
  }
};

export const filesAtFolder = async (req, res) => {
  //get User id
  const userId = req.user._statements[0].value;
  //get folder id
  const folderId = req.params.id;
  //get all Files
  const userFiles = await files.selectAll(
    // eslint-disable-next-line camelcase
    {
      user_id: userId,
      // eslint-disable-next-line camelcase
      folder_id: folderId,
    },
  );
  if (!userFiles) {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify('Files is empty'));
  } else {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(userFiles));
  }
};
