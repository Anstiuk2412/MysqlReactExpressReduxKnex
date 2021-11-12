import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import config from 'config';
import { user } from '../../database/models/user.js';

const jwtOpts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.get('jwtSecret'),
};

export const verify = (payload, done) => {
  let selectedUser = user.selectFirst({ id: payload.id });
  if (selectedUser) {
    return done(null, selectedUser);
  } else {
    return done(null, false);
  }
};

export let jwtStrategy = new JwtStrategy(jwtOpts, verify);
