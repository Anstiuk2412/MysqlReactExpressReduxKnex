import { insert, onConflict, update, where } from './modelsHelper.js';
import { comparePass } from '../../lib/auth/auth.js';

export const findUser = (column, value) => {
  const query = { [column]: value };
  where('', 'users', query);
};

export const saveUser = async (reqData) => {
  const message = {};
  if (!reqData.id) {
    //Insert
    await where('users', { email: reqData.email }).then(async (usersValues) => {
      if (usersValues[0]) {
        /*If user exist checked confirm token*/
        for (let i = 0; i < usersValues.length; ++i) {
          if (!usersValues[i].is_active) {
            /*For return current data to Controller update current select userValues*/
            usersValues[i].confirm_user = reqData.confirm_user;
            message.data = usersValues[i];
            /*Update confirmUser token*/
            await onConflict('users', reqData, 'email', 'confirm_user');
          }
        }
      } else {
        /*If user not exist do registration*/
        message.data = reqData;
        await insert('users', reqData);
      }
    });
  } else {
    //Update
    await update('users', reqData).catch(() => {
      message.error = 'Something went wrong';
    });
    message.success = 'Update successfully';
  }
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
