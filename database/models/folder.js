import { insert, selectFirst, selectAll } from './modelsHelper.js';

export const folders = {
  selectAll: (conditions) => selectAll('folders', conditions),
  selectFirst: (conditions) => selectFirst('folders', conditions),
  // eslint-disable-next-line camelcase
  create: (name, userId, folderParentId) =>
    insert('folders', {
      name: name,
      user_id: userId,
      parent_id: folderParentId,
    }),
};
