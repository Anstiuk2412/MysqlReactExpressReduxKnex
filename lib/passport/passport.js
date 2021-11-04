import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import config from 'config';
import { user } from '../../database/models/user.js';

const jwtOpts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
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
