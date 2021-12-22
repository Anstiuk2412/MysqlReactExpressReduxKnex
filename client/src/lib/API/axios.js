import axios from 'axios';
import { API_URL } from '../../config/config';

export const postData = async (url, data) => {
  return await axios
    .post(`${API_URL}${url}`, data, {
      withCredentials: true,
    })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return error.response.data;
    });
};

export const getData = async (url) => {
  return await axios
    .get(`${API_URL}${url}`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return error.response.data;
    });
};
