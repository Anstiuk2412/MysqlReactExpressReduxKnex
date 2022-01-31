import { insert, selectFirst, where } from './modelsHelper.js';

export const sharedFiles = {
  shareFile: (conditions) => insert('shared_files', conditions),
  selectFirst: (conditions) => selectFirst('shared_files', conditions),
  selectAll: (query) => where('shared_files', query),
};
