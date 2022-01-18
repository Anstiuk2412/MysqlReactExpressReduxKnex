import { files } from '../../../database/models/file.js';
import { folders } from '../../../database/models/folder.js';

export const openFolder = (userId, folderId) => {
  return files
    .selectAll({
      // eslint-disable-next-line camelcase
      user_id: userId,
      // eslint-disable-next-line camelcase
      folder_id: folderId,
    })
    .then((userFiles) =>
      folders
        .selectAll({
          // eslint-disable-next-line camelcase
          parent_id: folderId,
          // eslint-disable-next-line camelcase
          user_id: userId,
        })
        .then((childFolders) => {
          return { childFolders, userFiles };
        }),
    );
};
