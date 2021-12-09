import express from 'express';
import config from 'config';
import middleware from './app/middlewares/middleware.js';
import { router as userRouter } from './app/routes/userRouter.js';
import { router as fileRouter } from './app/routes/fileRouter.js';

const PORT = config.get('PORT');

const app = express();

/*Middleware*/
middleware(app);

/* Router*/
app.use(fileRouter);
app.use(userRouter);

/* Listen port */
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server start at http://localhost:${PORT}`);
});
