import express from 'express';
import config from 'config';
import path from 'path';
import { findUserWhere, getAuhUser } from './database/models/userModel.js';

const PORT = config.get('PORT');

const app = express();

/* Router of web page */
app.get('/', (req, res) => {
  res.sendFile(path.resolve('./client/build/index.html'));
});

app.get('/main.js', (req, res) => {
  res.sendFile(path.resolve('./client/build/main.js'));
});
getAuhUser('dse6023@gmail.com', '1234');
findUserWhere('name', 'Some');
/* Listen port */
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server start at http://localhost:${PORT}`);
});
