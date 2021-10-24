import bcrypt from 'bcrypt';

export const comparePass = (insertPassword, userPassword) => {
  bcrypt.compare(insertPassword, userPassword).then((isValid) => {
    if (!isValid) {
      // eslint-disable-next-line no-console
      console.log('Password not correct!');
    } else {
      // eslint-disable-next-line no-console
      console.log('All Done!');
    }
  });
};

export const createHash = async (value) => {
  await bcrypt.hash(value, 10).then((activationToken) => {
    value = activationToken;
  });
  return value;
};
