import express from 'express';
import config from 'config';
import path from 'path';

const PORT = config.get('PORT');

const app = express();

/* Router of web page */
app.get('/', (req, res) => {
  res.sendFile(path.resolve('./client/build/index.html'));
});

app.get('/main.js', (req, res) => {
  res.sendFile(path.resolve('./client/build/main.js'));
});

/* Listen port */
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server start at http://localhost:${PORT}`);
});
