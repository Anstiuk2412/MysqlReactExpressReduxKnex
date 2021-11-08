import passport from 'passport';
import bodyParser from 'body-parser';
import { jwtStrategy } from '../../lib/passport/passport.js';

export default (app) => {
  app.use(bodyParser.json());
  app.use(
    bodyParser.urlencoded({
      extended: true,
    }),
  );
  app.use(passport.initialize());
  passport.use(jwtStrategy);
};
