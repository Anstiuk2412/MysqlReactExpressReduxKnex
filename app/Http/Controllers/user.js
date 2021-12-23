import {
  comparePass,
  createHash,
  createToken,
} from '../../../lib/auth/auth.js';
import { user } from '../../../database/models/user.js';
import { fileURLToPath } from 'url';

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
      JSON.stringify([
        {
          message: 'User already active',
          severity: 'error',
          title: 'ERROR',
          redirect: false,
        },
      ]),
    );
  } else {
    await user.save(obtainedUserData);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(
      JSON.stringify([
        {
          message: 'Success login',
          severity: 'success',
          title: 'SUCCESS',
          redirect: false,
        },
      ]),
    );
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
    if (authUser.is_active === 1) {
      if (accessUser) {
        const accessToken = createToken({ id: authUser.id });
        res
          .status(200)
          .cookie('access_token', accessToken, {
            httpOnly: true,
          })
          .json([
            {
              message: 'Success login',
              severity: 'success',
              title: 'SUCCESS',
              redirect: true,
            },
          ]);
      } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(
          JSON.stringify([
            {
              message: 'Password wrong',
              severity: 'error',
              title: 'ERROR',
              redirect: false,
            },
          ]),
        );
      }
    } else {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(
        JSON.stringify([
          {
            message: "Account didn't active",
            severity: 'error',
            title: 'ERROR',
            redirect: false,
          },
        ]),
      );
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(
      JSON.stringify([
        {
          message: 'User not registered',
          severity: 'error',
          title: 'ERROR',
          redirect: false,
        },
      ]),
    );
  }
};

export const sendFile = (req, res) => {
  res.sendFile(pathToReact);
};

export const logout = (req, res) => {
  res.clearCookie('access_token');
  res.redirect('/signIn');
};
