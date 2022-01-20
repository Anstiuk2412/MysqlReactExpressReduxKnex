import { files as modelFiles } from '../../../database/models/file.js';
import { folders } from '../../../database/models/folder.js';

export const openFolder = async (userId, folderId) => {
  const files = await modelFiles.selectAll({
    // eslint-disable-next-line camelcase
    user_id: userId,
    // eslint-disable-next-line camelcase
    folder_id: folderId,
  });
  const subFolders = await folders.selectAll({
    // eslint-disable-next-line camelcase
    parent_id: folderId,
    // eslint-disable-next-line camelcase
    user_id: userId,
  });
  return { files, subFolders };
};
