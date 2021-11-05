import passport from 'passport';
import { login, register } from '../Http/Controllers/user.js';
import { Router } from 'express';

export const router = Router();

router.get('/', passport.authenticate('jwt', { session: false }), (req, res) =>
  res.send('HOME'),
);
router.get('/user/login', login);
router.post('/user/registration', register);
