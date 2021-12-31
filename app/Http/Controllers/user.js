import {
  comparePass,
  createHash,
  createToken,
} from '../../../lib/auth/auth.js';
import { user } from '../../../database/models/user.js';
import { fileURLToPath } from 'url';
import { userMessageResponse } from '../../../lib/helper/castomResponse.js';
import { folders } from '../../../database/models/folder.js';

const pathToReact = fileURLToPath(
  new URL('../../../client/build/index.html', import.meta.url),
);

export const register = async (req, res) => {
  const obtainedUserData = req.body;
  //delete password Confirm from object send DB
  delete obtainedUserData.passwordConfirm;
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
    res.end(
      JSON.stringify(
        userMessageResponse('User already active', 'error', false),
      ),
    );
    return;
  }
  // * Success registration
  const currentUser = await user.save(obtainedUserData);
  await folders.create('Home', currentUser[0], null);
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(
    JSON.stringify(
      userMessageResponse('Success registration', 'success', false),
    ),
  );
};

export const login = async (req, res) => {
  const obtainedUserData = req.body;
  const authUser = await user.selectFirst({ email: obtainedUserData.email });
  // * check password, generate token, successfully logged in
  const accessUser = async () =>
    await comparePass(obtainedUserData.password, authUser.password);
  // * If user not register
  if (!authUser) {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(
      JSON.stringify(
        userMessageResponse('User not registered', 'error', false),
      ),
    );
    return;
  }
  // * If password wrong
  if (!(await accessUser())) {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(
      JSON.stringify(userMessageResponse('Password wrong', 'error', false)),
    );
    return;
  }
  // * If user not active
  if (!authUser.is_active) {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(
      JSON.stringify(
        userMessageResponse("Account didn't active", 'error', false),
      ),
    );
    return;
  }
  // * Success login
  const accessToken = createToken({ id: authUser.id });
  res
    .status(200)
    .cookie('access_token', accessToken, {
      httpOnly: true,
    })
    .end(JSON.stringify({ redirect: true }));
};

export const sendFile = (req, res) => {
  res.sendFile(pathToReact);
};

export const logout = (req, res) => {
  res.clearCookie('access_token');
  res.redirect('/signIn');
};
