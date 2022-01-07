import { getData } from '../lib/API/axios';

export const openFolder = async (folderId) => {
  return await getData(`/api/files/${folderId}`);
};

// * get info of folder
export const getPathToParentFolder = async (folderId) => {
  return await getData(`/api/getPathToParentFolder/${folderId}`);
};
