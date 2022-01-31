import { save, selectFirst } from './modelsHelper.js';

export const fileLinks = {
  createFileLink: (conditions) =>
    save('file_links', conditions, 'file_id', 'tokken_confirm'),
  selectFirst: (conditions) => selectFirst('file_links', conditions),
};
