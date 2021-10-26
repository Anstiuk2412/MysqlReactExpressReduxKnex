import { insert, selectFirst, update, where } from './modelsHelper.js';
import { comparePass } from '../../lib/auth/auth.js';

export const findUser = (column, value) => {
  const query = { [column]: value };
  where('', 'users', query);
};

export const saveUser = (insertValue) => {
  if (!insertValue.id) {
    insert('users', insertValue, 'id');
  } else {
    update('users', insertValue);
  }
};

export const userLogin = async (insertValue) => {
  const userFirst = await selectFirst('users', { email: insertValue.email });
  if (!userFirst) {
    return new Promise((resolve, reject) => {
      reject('User didnt register');
    });
  }
  const validPass = await comparePass(insertValue.password, userFirst.password);
  if (!validPass) {
    return new Promise((resolve, reject) => {
      reject('Password wrong');
    });
  }
};
