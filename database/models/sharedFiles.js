import { save, selectFirst, where } from './modelsHelper.js';

export const sharedFiles = {
  shareFile: (conditions) =>
    save('shared_files', conditions, ['file_id', 'to_user_id'], 'user_id'),
  selectFirst: (conditions) => selectFirst('shared_files', conditions),
  selectAll: (query) => where('shared_files', query),
};
