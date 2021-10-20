import express from 'express';
import config from 'config';
import bodyParser from 'body-parser';
import { login, register } from './app/Http/Controllers/user.js';
import { registerValidate } from './lib/validate/register.js';
import { loginValidate } from './lib/validate/login.js';
import { validationResult } from 'express-validator';

const PORT = config.get('PORT');

const app = express();
app.use(bodyParser.json());

/* Routers Auth */
app.get('/user/login', loginValidate, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  login(req, res);
});
app.post('/user/registration', registerValidate, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  register(req, res);
});

/* Listen port */
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server start at http://localhost:${PORT}`);
});
