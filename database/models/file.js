import { selectFirst, where, whereIn } from './modelsHelper.js';

export const files = {
  selectAll: (query) => where('files', query),
  selectFirst: (conditions) => selectFirst('files', conditions),
  selectAllWhereIn: (columnName, array) => whereIn('files', columnName, array),
};
