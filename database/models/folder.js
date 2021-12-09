import { where } from './modelsHelper.js';

export const folders = {
  selectAll: (query) => where('folders', query),
};
