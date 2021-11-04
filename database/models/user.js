import { save, selectFirst } from './modelsHelper.js';
import jwt from 'jsonwebtoken';
import config from 'config';

export const user = {
  selectFirst: (conditions) => selectFirst('users', conditions),
  save: (insertValue) => save('users', insertValue, 'email', 'confirm_user'),
  createToken: (payload) =>
    jwt.sign(payload, config.get('jwtSecret'), {
      expiresIn: '2m',
    }),
};
