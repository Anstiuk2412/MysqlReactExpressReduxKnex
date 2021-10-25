import bcrypt from 'bcrypt';

export const comparePass = (insertPassword, userPassword) => {
  return bcrypt.compare(insertPassword, userPassword);
};

export const createHash = async (value) => {
  await bcrypt.hash(value, 10).then((activationToken) => {
    value = activationToken;
  });
  return value;
};
