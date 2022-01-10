import { getData } from '../lib/API/axios';

export const openFolder = async (folderId) => {
  return await getData(`/api/files/${folderId}`);
};
