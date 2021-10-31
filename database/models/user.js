import {
  insert,
  onConflict,
  selectFirst,
  update,
  where,
} from './modelsHelper.js';
import { comparePass } from '../../lib/auth/auth.js';

export const findUser = (column, value) => {
  const query = { [column]: value };
  where('', 'users', query);
};

export const registerOrUpdateToken = async (reqData) => {
  const message = {};
  const macthedUsers = await selectFirst('users', { email: reqData.email });
  if (macthedUsers) {
    /*If user exist checked confirm token*/
    if (!macthedUsers.is_active) {
      /*For return current data to Controller update current select userValues*/
      macthedUsers.confirm_user = reqData.confirm_user;
      message.data = macthedUsers;
      /*Update confirmUser token*/
      await onConflict('users', reqData, 'email', 'confirm_user');
    } else {
      //if active user
      message.error = 'User already active';
    }
  } else {
    /*If user not exist do registration*/
    message.data = reqData;
    await insert('users', reqData);
  }
  return message;
};

export const updateUser = async (reqData) => {
  const message = {};
  await update('users', reqData).catch(() => {
    message.error = 'Something went wrong';
  });
  message.data = 'Update successfully';
  return message;
};

export const userLogin = async (reqData) => {
  const message = {};
  const accessUser = await where('users', {
    email: reqData.email,
  }).then(async (usersValues) => {
    for (let i = 0; i < usersValues.length; ++i) {
      if (await comparePass(reqData.password, usersValues[i].password)) {
        return usersValues[i];
      }
    }
  });
  if (accessUser) {
    message.data = accessUser;
    //create JWT
  } else {
    message.error = 'User not found';
  }
  return message;
};
