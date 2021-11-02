import { save, where } from './modelsHelper.js';
import { comparePass } from '../../lib/auth/auth.js';

export const findUser = (column, value) => {
  const query = { [column]: value };
  where('', 'users', query);
};

export const saveUniqueUser = async (insertValue) => {
  await save('users', insertValue, 'email', 'confirm_user');
  return insertValue;
};

export const userLogin = async (insertValue, authUser) => {
  const accessUser = await comparePass(insertValue.password, authUser.password);
  return accessUser;
};
