import { save, selectFirst } from './modelsHelper.js';

export const user = {
  selectFirst: (conditions) => selectFirst('users', conditions),
  save: (insertValue) => save('users', insertValue, 'email', 'confirm_user'),
};
