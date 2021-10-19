import { Where } from './modelsHelper.js';

export const findUser = (column, value) => {
  const query = { [column]: value };
  Where('', 'users', query);
};
