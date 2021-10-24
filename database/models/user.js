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

export const userLogin = (insertValue) => {
  const then = (user) => {
    if (!user) {
      // eslint-disable-next-line no-console
      console.log('User not found');
    } else {
      comparePass(insertValue.password, user.password);
    }
  };
  selectFirst('users', { email: insertValue.email }, then);
};
