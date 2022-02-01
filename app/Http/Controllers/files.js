import { openFolder } from '../../../lib/helper/workWithFilesAndFolders/openFolder.js';
import { folders } from '../../../database/models/folder.js';
import { user } from '../../../database/models/user.js';
import { files } from '../../../database/models/file.js';
import crypto from 'crypto';
import { sharedFiles } from '../../../database/models/sharedFiles.js';
import { fileLinks } from '../../../database/models/fileLink.js';

export const filesAndFoldersAtFolder = async (req, res) => {
  // * get User id
  const userId = req.user.user_id;
  // * get folder id
  const folderIdFromRequest =
    req.params.folder_id === 'undefined'
      ? { parent_id: null }
      : { id: req.params.folder_id };
  const getFolderConds = {
    user_id: userId, // * always exists
    ...folderIdFromRequest,
  };
  // * get Folder info
  const { id: folderId, parent_id: folderParentId } = await folders.selectFirst(
    getFolderConds,
  );
  // * get files at mainFolder and folder at mainFolder
  const filesAndFolders = await openFolder(userId, folderId);
  // * add parent_id to filesAndFolders
  filesAndFolders.folderParentId = folderParentId;
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(
    JSON.stringify({
      data: {
        filesAndFolders,
      },
    }),
  );
};

export const filesShare = async (req, res) => {
  const userId = req.user.user_id;
  let { filesId, email } = req.body;
  const userToShare = await user.selectFirst({ email: email });
  // * if user trying to send oneself
  if (userId === userToShare.id) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(
      JSON.stringify({
        data: {
          message: [
            {
              message: 'You are trying to send yourself',
              severity: 'error',
              title: 'ERROR',
            },
          ],
        },
      }),
    );
    return;
  }
  // * if user not exist
  if (!userToShare) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(
      JSON.stringify({
        data: {
          message: [
            {
              message: 'Email address not found',
              severity: 'error',
              title: 'ERROR',
            },
          ],
        },
      }),
    );
    return;
  }
  // * share files to DB
  const shareFilesObjects = [];
  for (const fileId of filesId) {
    // eslint-disable-next-line camelcase
    shareFilesObjects.push({
      file_id: fileId,
      user_id: userId,
      to_user_id: userToShare.id,
    });
  }
  await sharedFiles.shareFile(shareFilesObjects);
  // * response success message
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(
    JSON.stringify({
      data: {
        message: [
          {
            message: 'Success shared files',
            severity: 'success',
            title: 'SUCCESS',
          },
        ],
      },
    }),
  );
};

export const getAvailableFiles = async (req, res) => {
  const userId = req.user.user_id;
  const availableFiles = await files.selectAllSharedFiles(
    'shared_files',
    { to_user_id: userId },
    'id',
    'file_id',
  );
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(
    JSON.stringify({
      data: {
        message: [
          {
            message: 'Success shared files',
            severity: 'success',
            title: 'SUCCESS',
          },
        ],
        filesAndFolders: {
          files: availableFiles,
          subFolders: [],
          folderParentId: null,
        },
      },
    }),
  );
};

export const createLinkForShareFile = (req, res) => {
  const userId = req.user.user_id;
  const fileId = req.body.fileId;
  // * created hash for link
  const tokenConfirm = crypto.randomBytes(20).toString('hex');
  // * response path
  fileLinks.createFileLink({
    user_id: userId,
    file_id: fileId,
    tokken_confirm: tokenConfirm,
  });
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(
    JSON.stringify({
      data: {
        path: 'http://localhost:3000/addFileByPath/' + tokenConfirm,
      },
    }),
  );
};

export const addSharedFilesByLink = async (req, res) => {
  const { token } = req.body;
  const { user_id: userToShareId } = req.user;
  const fileLink = await fileLinks.selectFirst({ tokken_confirm: token });
  if (!fileLink) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(
      JSON.stringify({
        data: {
          message: [
            {
              message: 'Path incorrect',
              severity: 'error',
              title: 'Error',
            },
          ],
        },
      }),
    );
    return;
  }
  const { file_id: fileId, user_id: ownerId } = fileLink;
  if (userToShareId === ownerId) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(
      JSON.stringify({
        data: {
          message: {
            message: 'Its your file',
            severity: 'success',
            title: 'SUCCESS',
          },
        },
      }),
    );
    return;
  }
  await sharedFiles.shareFile({
    file_id: fileId,
    user_id: ownerId,
    to_user_id: userToShareId,
  });
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(
    JSON.stringify({
      data: {
        message: [
          {
            message: 'You get file successfully',
            severity: 'success',
            title: 'SUCCESS',
          },
        ],
      },
    }),
  );
};
