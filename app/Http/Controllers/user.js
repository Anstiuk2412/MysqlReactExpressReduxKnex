import { createHash } from '../../../lib/auth/auth.js';
import { saveUser, userLogin } from '../../../database/models/user.js';

export const login = async (req, res) => {
  const insertValue = req.body;
  const { error, data } = await userLogin(insertValue);
  if (error) {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(error));
  } else {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data));
  }
};

export const register = async (req, res) => {
  const userData = req.body;
  userData.password = await createHash(userData.password);
  // eslint-disable-next-line camelcase
  userData.confirm_user = await createHash(userData.confirm_user);
  const { error, data } = await saveUser(userData);
  if (error) {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(error));
  } else {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data));
  }
};
