import express from 'express';
import config from 'config';
import bodyParser from 'body-parser';
import { login, register } from './app/Http/Controller/user.js';

const PORT = config.get('PORT');

const app = express();
app.use(bodyParser.json());
/* Routers Auth */
app.get('/user/login', (req, res) => {
  login(req, res);
});

app.post('/user/registration', (req, res) => {
  register(req, res);
});

/* Listen port */
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server start at http://localhost:${PORT}`);
});
