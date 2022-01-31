import { insert, selectFirst, where } from './modelsHelper.js';

export const folders = {
  selectAll: (query) => where('folders', query),
  selectFirst: (conditions) => selectFirst('folders', conditions),
  // eslint-disable-next-line camelcase
  create: (name, userId, folderParentId) =>
    insert('folders', {
      name: name,
      user_id: userId,
      parent_id: folderParentId,
    }),
  shareFile: (conditions) => insert('shared_folders', conditions),
  selectFirstAvailable: (conditions) =>
    selectFirst('shared_folders', conditions),
  selectAllAvailable: (query) => where('shared_folders', query),
};
