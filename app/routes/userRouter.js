import passport from 'passport';
import { login, logout, register, sendFile } from '../Http/Controllers/user.js';
import { Router } from 'express';
import {
  registerValidate,
  loginValidate,
  validate,
} from '../../lib/validate/user.js';

export const router = Router();
/*Routers without Auth user*/
router.get('*', sendFile);

router.post('/user/login', loginValidate, validate, login);
router.post('/user/registration', registerValidate, validate, register);

router.get('/logout', logout);
/*Privat Route*/
router.get('/', passport.authenticate('jwt', {
    session: false,
    failureRedirect: '/signIn',
  }), sendFile,
);
