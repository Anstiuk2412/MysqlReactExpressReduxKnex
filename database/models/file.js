import { where } from './modelsHelper.js';

export const files = {
  selectAll: (query) => where('files', query),
};
