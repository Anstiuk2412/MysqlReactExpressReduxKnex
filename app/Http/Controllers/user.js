import {
  comparePass,
  createHash,
  createToken,
} from '../../../lib/auth/auth.js';
import { user } from '../../../database/models/user.js';

export const register = async (req, res) => {
  const obtainedUserData = req.body;
  obtainedUserData.password = await createHash(obtainedUserData.password);
  // eslint-disable-next-line camelcase
  obtainedUserData.confirm_user = await createHash(
    obtainedUserData.confirm_user,
  );
  // eslint-disable-next-line camelcase
  const activeUser = await user.selectFirst({
    email: obtainedUserData.email,
    is_active: 1,
  });
  if (activeUser) {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify('User already active'));
  } else {
    await user.save(obtainedUserData);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(obtainedUserData));
  }
};

export const login = async (req, res) => {
  const obtainedUserData = req.body;
  const authUser = await user.selectFirst({ email: obtainedUserData.email });
  if (authUser) {
    // check password, generate token, successfully logged in
    const accessUser = await comparePass(
      obtainedUserData.password,
      authUser.password,
    );
    if (accessUser) {
      const token = createToken({ id: authUser.id });
      res.status(200).json({ token: `Bearer ${token}` });
    } else {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify('Password wrong'));
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify('User not registered'));
  }
};
