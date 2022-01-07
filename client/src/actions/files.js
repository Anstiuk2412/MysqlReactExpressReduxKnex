import { getData } from '../lib/API/axios';

export const openFolder = async (folderId) => {
  return await getData(`/api/files/${folderId}`);
};

export const getBreadcrumbs = async (folderId) => {
  return await getData(`/api/breadcrumbs/${folderId}`);
};
