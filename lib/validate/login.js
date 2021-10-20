import { body } from 'express-validator';

export const loginValidate = [
  body('email').isEmail(),
  body('password').isLength({ min: 5 }),
];
