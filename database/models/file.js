import { where } from './modelsHelper.js';

export const getFiles = (folderId) => {
  // eslint-disable-next-line camelcase
  const query = { folder_id: folderId };
  where('', 'files', query);
};
