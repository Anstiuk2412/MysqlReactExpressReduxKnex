import { insert, selectFirst, where } from './modelsHelper.js';

export const folders = {
  selectAll: (query) => where('folders', query),
  selectFirst: (conditions) => selectFirst('folders', conditions),
  // eslint-disable-next-line camelcase
  create: (name, userId, folderParentId) =>
    insert('folders', {
      name: name,
      // eslint-disable-next-line camelcase
      user_id: userId,
      // eslint-disable-next-line camelcase
      parent_id: folderParentId,
    }),
};
