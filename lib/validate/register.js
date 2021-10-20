import { body } from 'express-validator';

export const registerValidate = [
  body('name').isLength({ min: 3 }),
  body('surname').isLength({ min: 3 }),
  body('email').isEmail(),
  body('password').isLength({ min: 5 }),
  body('is_active').isBoolean(),
  body('confirm_user').isLength({ min: 5 }),
];
