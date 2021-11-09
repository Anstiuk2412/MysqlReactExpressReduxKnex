import { body, validationResult } from 'express-validator';

export const loginValidate = [
  body('email').isEmail(),
  body('password').isLength({ min: 5 }),
];

export const registerValidate = [
  body('name').isLength({ min: 3 }),
  body('surname').isLength({ min: 3 }),
  body('email').isEmail(),
  body('password').isLength({ min: 5 }),
  body('is_active').isBoolean(),
  body('confirm_user').isLength({ min: 5 }),
];

export const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
