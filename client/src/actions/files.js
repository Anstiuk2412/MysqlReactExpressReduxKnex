import axios from 'axios';
import { API_URL } from '../config/config.js';

export const getAllUserFiles = async (setFiles) => {
  await axios.get(`${API_URL}/api/files`).then((res) => {
    setFiles(res.data);
  });
};

export const getAllUserFolders = async (setFolders) => {
  await axios.get(`${API_URL}/api/folders`).then((res) => {
    setFolders(res.data);
  });
};

export const openFolder = async (setFolders, setFiles, folderId) => {
  await axios.get(`${API_URL}/api/folder/folder/${folderId}`).then((res) => {
    setFolders(res.data);
  });
  await axios.get(`${API_URL}/api/folder/file/${folderId}`).then((res) => {
    setFiles(res.data);
  });
};
