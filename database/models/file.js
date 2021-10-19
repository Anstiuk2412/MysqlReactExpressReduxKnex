import { Where } from './modelsHelper.js';

export const getFiles = (folderId) => {
  const query = { folder_id: folderId };
  Where('', 'files', query);
};
