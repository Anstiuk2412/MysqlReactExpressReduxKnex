import axios from 'axios';
import { API_URL } from '../config/config.js';

export const getAllUserFilesAndFolders = async (setFolder, setFile) => {
  await axios.get(`${API_URL}/api/files`).then((res) => {
    setFile(res.data);
  });
  await axios.get(`${API_URL}/api/folders`).then((res) => {
    setFolder(res.data);
  });
};

export const openFolder = async (setFolder, setFiles, folderId) => {
  await axios.get(`${API_URL}/api/folder/folder/${folderId}`).then((res) => {
    setFolder(res.data);
  });
  await axios.get(`${API_URL}/api/folder/file/${folderId}`).then((res) => {
    setFiles(res.data);
  });
};
