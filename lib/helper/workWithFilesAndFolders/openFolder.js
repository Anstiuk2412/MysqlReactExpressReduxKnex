import { files } from '../../../database/models/file.js';
import { folders } from '../../../database/models/folder.js';

export const openFolder = async (userId, folderId) => {
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
  return { userFiles, childFolders };
};

export const openHomeFolder = async (userId) => {
  const homeFolder = await folders.selectFirst({
    user_id: userId,
    parent_id: null,
  });
  const homeFolderId = homeFolder.id;
  const userFiles = await files.selectAll({
    // eslint-disable-next-line camelcase
    user_id: userId,
    // eslint-disable-next-line camelcase
    folder_id: homeFolderId,
  });
  const childFolders = await folders.selectAll({
    // eslint-disable-next-line camelcase
    parent_id: homeFolderId,
    // eslint-disable-next-line camelcase
    user_id: userId,
  });
  return { userFiles, childFolders };
};
