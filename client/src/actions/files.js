import axios from 'axios';
import { API_URL } from '../config/config.js';

export const openFolder = async (folderId) => {
  return await axios.get(`${API_URL}/api/files/${folderId}`).then((res) => {
    return res.data;
  });
};
