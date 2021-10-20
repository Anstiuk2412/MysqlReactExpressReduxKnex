import { selectFirst } from '../../../database/models/modelsHelper.js';
import { comparePass, hashPassAndAuthToken } from '../../../lib/auth/auth.js';
import { insertInUsers } from '../../../database/models/user.js';

export const login = (req, res) => {
  const then = (user) => {
    if (!user) {
      res.writeHead(401, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify('User not Found!'));
    } else {
      comparePass(req, res, user);
    }
  };
  selectFirst('users', { email: req.body.email }, then);
};

export const register = (req, res) => {
  hashPassAndAuthToken(req, res, insertInUsers);
};
