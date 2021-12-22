import { postData } from '../lib/API/axios';

export const registration = async (name, email, password, passwordConfirm) => {
  return await postData(`/api/registration`, {
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
  return await postData(`/api/login`, { email, password });
};
