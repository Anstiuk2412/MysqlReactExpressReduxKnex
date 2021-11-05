import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from 'config';

export const comparePass = (insertPassword, userPassword) => {
  return bcrypt.compare(insertPassword, userPassword);
};

export const createHash = async (value) => {
  await bcrypt.hash(value, 10).then((activationToken) => {
    value = activationToken;
  });
  return value;
};

export const createToken = (payload) => {
  return jwt.sign(payload, config.get('jwtSecret'), {
    expiresIn: '2m',
  });
};
