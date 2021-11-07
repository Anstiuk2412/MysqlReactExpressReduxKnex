import { save, selectFirst } from './modelsHelper.js';

export const user = {
  selectFirst: (conditions) => selectFirst('users', conditions),
  save: (obtainedUserData) =>
    save('users', obtainedUserData, 'email', 'confirm_user'),
};
