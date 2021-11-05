import { comparePass, createHash } from '../../../lib/auth/auth.js';
import { user } from '../../../database/models/user.js';

export const register = async (req, res) => {
  const insertValue = req.body;
  insertValue.password = await createHash(insertValue.password);
  // eslint-disable-next-line camelcase
  insertValue.confirm_user = await createHash(insertValue.confirm_user);
  // eslint-disable-next-line camelcase
  const activeUser = await user.selectFirst({
    email: insertValue.email,
    is_active: 1,
  });
  if (activeUser) {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify('User already active'));
  } else {
    await user.save(insertValue);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(insertValue));
  }
};

export const login = async (req, res) => {
  const insertValue = req.body;
  const authUser = await user.selectFirst({ email: insertValue.email });
  if (authUser) {
    // check password, generate token, successfully logged in
    const accessUser = await comparePass(
      insertValue.password,
      authUser.password,
    );
    if (accessUser) {
      const token = user.createToken({ id: authUser.id });
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ token: `Bearer ${token}` }));
    } else {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify('Password wrong'));
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify('User not registered'));
  }
};
