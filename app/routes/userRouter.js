import passport from 'passport';
import { login, logout, register, sendFile } from '../Http/Controllers/user.js';
import { Router } from 'express';
import {
  registerValidate,
  loginValidate,
  validate,
} from '../../lib/validate/user.js';
import { fileURLToPath } from 'url';

/*Absolute paths for react*/
const pathToReactjs = fileURLToPath(new URL('../../client/build/main.js', import.meta.url));

export const router = Router();
/*Routers without Auth user*/
router.get('/main.js', (req, res) => {
  res.sendFile(pathToReactjs);
});
router.get('/signIn', sendFile);
router.get('/signUp', sendFile);

router.post('/user/login', loginValidate, validate, login);
router.post('/user/registration', registerValidate, validate, register);

router.get('/logout', logout);
/*Privat Route*/
router.get('*', passport.authenticate('jwt', {
      session: false,
      failureRedirect: '/signIn',
    }), sendFile,
);
