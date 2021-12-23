import passport from 'passport';
import bodyParser from 'body-parser';
import { jwtStrategy } from '../../lib/passport/passport.js';
import cookieParser from 'cookie-parser';
import express from 'express';
import { fileURLToPath } from 'url';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from '../../lib/swagger/index.js';

const pathToReactjs = fileURLToPath(
  new URL('../../client/build', import.meta.url),
);

export default (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.use(bodyParser.json());
  app.use(
    bodyParser.urlencoded({
      extended: true,
    }),
  );
  app.use(passport.initialize());
  app.use(cookieParser());
  passport.use(jwtStrategy);
  app.use(express.static(pathToReactjs));
};
