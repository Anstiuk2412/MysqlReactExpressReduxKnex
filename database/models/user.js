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
  const message = {};
  const accessUser = await where('users', {
    email: insertValue.email,
  }).then(async (usersValues) => {
    for (let i = 0; i < usersValues.length; ++i) {
      if (await comparePass(insertValue.password, usersValues[i].password)) {
        return await selectFirst('users', usersValues[i]);
      }
    }
  });
  if (accessUser) {
    //create JWT
  } else {
    message.error = 'User not found';
  }
  message.success = 'User login';
  return message;
};
