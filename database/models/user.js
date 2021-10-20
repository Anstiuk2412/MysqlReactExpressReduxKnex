import { insert, where } from './modelsHelper.js';

export const findUser = (column, value) => {
  const query = { [column]: value };
  where('', 'users', query);
};

export const insertInUsers = (insertValue, res) => {
  insert('users', insertValue, res);
};
