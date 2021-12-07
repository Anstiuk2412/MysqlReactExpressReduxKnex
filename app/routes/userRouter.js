import passport from 'passport';
import { login, logout, register, sendFile } from '../Http/Controllers/user.js';
import { Router } from 'express';
import {
  registerValidate,
  loginValidate,
  validate,
} from '../../lib/validate/user.js';

export const router = Router();

router.post('/api/login', loginValidate, validate, login);
router.post('/api/registration', registerValidate, validate, register);

router.get('/logout', logout);
/*Privat Route*/
router.get(
  '/',
  passport.authenticate('jwt', {
    session: false,
    failureRedirect: '/signIn',
  }),
  sendFile,
);
router.get('*', sendFile);
