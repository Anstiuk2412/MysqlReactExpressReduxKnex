import express from 'express';
import config from 'config';
import bodyParser from 'body-parser';
import { login, register } from './app/Http/Controllers/user.js';

const PORT = config.get('PORT');

const app = express();
app.use(bodyParser.json());

/* Routers Auth */
app.get('/user/login', login);

app.post('/user/registration', register);

/* Listen port */
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server start at http://localhost:${PORT}`);
});
