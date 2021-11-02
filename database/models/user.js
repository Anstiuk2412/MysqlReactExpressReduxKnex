import { save, selectFirst } from './modelsHelper.js';

export const user = {
  selectFirst: (conditions) => selectFirst('users', conditions),
};

export const saveUniqueUser = async (insertValue) => {
  await save('users', insertValue, 'email', 'confirm_user');
  return insertValue;
};
