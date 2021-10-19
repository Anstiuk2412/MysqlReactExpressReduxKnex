import { Where } from './modelsHelper.js';

export const findUser = (column, value) => {
  const query = { [column]: value };
  Where('', 'users', query);
};

export const getAuthUser = (email, password) => {
  const query = {
    email: email,
    password: password,
  };
  Where('', 'users', query);
};
