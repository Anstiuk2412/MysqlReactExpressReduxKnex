import passport from 'passport';
import { login, register } from '../Http/Controllers/user.js';
import { Router } from 'express';
import {
  registerValidate,
  loginValidate,
  validate,
} from '../../lib/validate/user.js';

export const router = Router();

router.get('*', passport.authenticate('jwt', { session: false }), (req, res) =>
  res.send('HOME'),
);
router.post('/user/login', loginValidate, validate, login);
router.post('/user/registration', registerValidate, validate, register);
