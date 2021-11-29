import { API_URL } from '../config/config.js';
import { postData } from '../lib/axios/axios';

export const registration = async (name, email, password, passwordConfirm) => {
  await postData(`${API_URL}/user/registration`, {
    name,
    email,
    password,
    passwordConfirm,
    // eslint-disable-next-line camelcase
    is_active: 0,
    // eslint-disable-next-line camelcase
    confirm_user: 'aasdadad',
  });
};
export const login = async (email, password) => {
  await postData(`${API_URL}/user/login`, { email, password });
};
