import { insert, selectFirst, update, where } from './modelsHelper.js';
import { comparePass } from '../../lib/auth/auth.js';

export const findUser = (column, value) => {
  const query = { [column]: value };
  where('', 'users', query);
};

export const saveUser = (insertValue) => {
  selectFirst('users', { email: insertValue.email }, (result) => {
    if (!result) {
      insert('users', insertValue);
    } else {
      updateUser(insertValue);
    }
  });
};

export const updateUser = (insertValue) => {
  update('users', insertValue);
};

export const userLogin = (insertValue) => {
  const then = (user) => {
    if (!user) {
      // eslint-disable-next-line no-console
      console.log('User not found');
    } else {
      comparePass(insertValue, user);
    }
  };
  selectFirst('users', { email: insertValue.email }, then);
};
