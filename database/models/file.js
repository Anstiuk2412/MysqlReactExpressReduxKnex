import { selectAll, selectFirst } from './modelsHelper.js';

export const files = {
  selectFirst: (conditions) => selectFirst('files', conditions),
  selectAll: (conditions = null, join = null) =>
    selectAll('files', conditions, join),
};
