import { Strategy as JwtStrategy } from 'passport-jwt';
import config from 'config';
import { user } from '../../database/models/user.js';

const cookieExtractor = (req) => {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies['access_token'];
  }
  return token;
};

const jwtOpts = {
  jwtFromRequest: cookieExtractor,
  secretOrKey: config.get('jwtSecret'),
};

export let jwtStrategy = new JwtStrategy(jwtOpts, (payload, done) => {
  let selectedUser = user.selectFirst({ id: payload.id });
  if (selectedUser) {
    done(null, selectedUser);
  } else {
    done(null, false);
  }
});
