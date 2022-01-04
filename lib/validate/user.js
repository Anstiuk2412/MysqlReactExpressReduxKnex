import { body, validationResult } from 'express-validator';

export const loginValidate = [
  body('email').isEmail(),
  body('password').isLength({ min: 5 }),
];

export const registerValidate = [
  body('name').isLength({ min: 3 }),
  body('email').isEmail(),
  body('password').isLength({ min: 5 }),
  body('is_active').isBoolean(),
  body('confirm_user').isLength({ min: 5 }),
  body('passwordConfirm')
    .custom((passwordConfirm, { req }) => req.body.password === passwordConfirm)
    .withMessage('Password confirmation does not match password'),
];

export const validate = (req, res, next) => {
  const errors = validationResult(req);
  const message = [];
  if (!errors.isEmpty()) {
    for (let i = 0; i < errors.errors.length; i++) {
      message[i] = {
        message: `${errors.errors[i].msg} ${errors.errors[i].param}`,
        title: 'ERROR',
        severity: 'error',
      };
    }
    return res.status(400).end(
      JSON.stringify({
        data: { message },
        redirect: false,
      }),
    );
  }
  next();
};
