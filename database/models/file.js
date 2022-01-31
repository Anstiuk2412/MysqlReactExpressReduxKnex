import { insert, save, selectFirst, where, whereIn } from './modelsHelper.js';

export const files = {
  selectAll: (query) => where('files', query),
  selectFirst: (conditions) => selectFirst('files', conditions),
  shareFile: (conditions) => insert('shared_files', conditions),
  selectFirstAvailable: (conditions) => selectFirst('shared_files', conditions),
  selectAllAvailable: (query) => where('shared_files', query),
  selectAllWhereIn: (columnName, array) => whereIn('files', columnName, array),
  createFileLink: (conditions) =>
    save('file_links', conditions, 'file_id', 'tokken_confirm'),
  selectFirstFileLinks: (conditions) => selectFirst('file_links', conditions),
};
