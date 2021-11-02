import { createHash } from '../../../lib/auth/auth.js';
import { saveUniqueUser, userLogin } from '../../../database/models/user.js';
import { selectFirst } from '../../../database/models/modelsHelper.js';

export const register = async (req, res) => {
  const insertValue = req.body;
  insertValue.password = await createHash(insertValue.password);
  // eslint-disable-next-line camelcase
  insertValue.confirm_user = await createHash(insertValue.confirm_user);
  // eslint-disable-next-line camelcase
  const activeUser = await selectFirst('users', {
    email: insertValue.email,
    is_active: 1,
  });
  if (activeUser) {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify('User already active'));
  } else {
    const message = await saveUniqueUser(insertValue);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(message));
  }
};

export const login = async (req, res) => {
  const insertValue = req.body;
  const authUser = await selectFirst('users', { email: insertValue.email });
  if (authUser) {
    // check password, generate token, successfully logged in
    const valid = await userLogin(insertValue, authUser);
    if (valid) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(authUser));
    } else {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify('Password wrong'));
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify('User not registered'));
  }
};
