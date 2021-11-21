import passport from 'passport';
import bodyParser from 'body-parser';
import { jwtStrategy } from '../../lib/passport/passport.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

export default (app) => {
  app.use(bodyParser.json());
  app.use(
    bodyParser.urlencoded({
      extended: true,
    }),
  );
  app.use(passport.initialize());
  app.use(cookieParser());
  passport.use(jwtStrategy);
  app.use(cors());
};
