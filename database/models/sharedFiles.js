import { save, selectFirst, selectAll } from './modelsHelper.js';

export const sharedFiles = {
  shareFile: (files) =>
    save('shared_files', files, ['file_id', 'to_user_id'], 'user_id'),
  selectFirst: (conditions) => selectFirst('shared_files', conditions),
  selectAll: (conditions) => selectAll('shared_files', conditions),
};
