import { getData, postData } from '../lib/API/axios';

export const openFolder = async (folderId) => {
  return await getData(`/api/files/${folderId}`);
};

export const getAvailableFiles = async () => {
  return await getData(`/api/availableFiles`);
};

export const sharedFilesByEmail = async (filesId, email) => {
  return await postData(`/api/filesShare`, { filesId, email });
};

export const genaretePath = async (fileId) => {
  return await postData(`/api/generatePathShareFile`, { fileId });
};

export const addSharedFilesByLink = async (token) => {
  return await postData(`/api/addSharedFilesByLink`, { token });
};
