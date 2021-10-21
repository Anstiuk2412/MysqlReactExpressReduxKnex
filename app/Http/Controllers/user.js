import { hashPassAndAuthToken } from '../../../lib/auth/auth.js';
import { saveUser, userLogin } from '../../../database/models/user.js';

export const login = (req, res) => {
  try {
    const insertValue = req.body;
    userLogin(insertValue);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify('All Done!'));
  } catch {
    res.writeHead(401, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify('Something went wrong'));
  }
};

export const register = (req, res) => {
  try {
    const userData = req.body;
    hashPassAndAuthToken(userData, saveUser);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify('All Done!'));
  } catch {
    res.writeHead(401, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify('Something went wrong'));
  }
};
