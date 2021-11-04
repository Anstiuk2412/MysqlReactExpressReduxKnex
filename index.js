import express from 'express';
import config from 'config';
import { login, register } from './app/Http/Controllers/user.js';
import passport from 'passport';
import middleware from './app/middlewares/middleware.js';
const PORT = config.get('PORT');

const app = express();

/*Middleware*/
middleware(app);

/* Users router*/
app.get(
  '/',
  passport.authenticate('jwt', {
    session: false,
  }),
  (req, res) => res.send('HOME'),
);

/* Routers Auth */
app.get('/user/login', login);
app.post('/user/registration', register);

/* Listen port */
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server start at http://localhost:${PORT}`);
});
