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

router.get('*', sendFile);
