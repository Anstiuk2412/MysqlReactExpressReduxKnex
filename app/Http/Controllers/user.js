import {
  comparePass,
  createHash,
  createToken,
} from '../../../lib/auth/auth.js';
import { user } from '../../../database/models/user.js';
import { fileURLToPath } from 'url';
import { userMessageResponse } from '../../../lib/helper/castomResponse.js';

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
  const userAlreadyExists = () => {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(
      JSON.stringify(
        userMessageResponse('User already active', 'error', false),
      ),
    );
  };
  const successRegister = async () => {
    await user.save(obtainedUserData);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(
      JSON.stringify(
        userMessageResponse('Success registration', 'success', false),
      ),
    );
  };
  activeUser ? userAlreadyExists() : await successRegister();
};

export const login = async (req, res) => {
  const obtainedUserData = req.body;
  const authUser = await user.selectFirst({ email: obtainedUserData.email });
  const accessUser = async () => {
    return await comparePass(obtainedUserData.password, authUser.password);
  };
  const successLogin = () => {
    const accessToken = createToken({ id: authUser.id });
    res
      .status(200)
      .cookie('access_token', accessToken, {
        httpOnly: true,
      })
      .end(
        JSON.stringify(userMessageResponse('Success login', 'success', true)),
      );
  };
  const wrongPassword = () => {
    res
      .writeHead(404, { 'Content-Type': 'application/json' })
      .end(
        JSON.stringify(userMessageResponse('Password wrong', 'error', false)),
      );
  };
  const userNotActive = () => {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(
      JSON.stringify(
        userMessageResponse("Account didn't active", 'error', false),
      ),
    );
  };
  const userNotRegister = () => {
    res
      .writeHead(404, { 'Content-Type': 'application/json' })
      .end(
        JSON.stringify(
          userMessageResponse('User not registered', 'error', false),
        ),
      );
  };
  return authUser
    ? authUser.is_active === 1
      ? (await accessUser())
        ? successLogin()
        : wrongPassword()
      : userNotActive()
    : userNotRegister();
};

export const sendFile = (req, res) => {
  res.sendFile(pathToReact);
};

export const logout = (req, res) => {
  res.clearCookie('access_token');
  res.redirect('/signIn');
};
