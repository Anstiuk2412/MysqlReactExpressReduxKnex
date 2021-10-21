import bcrypt from 'bcrypt';

export const comparePass = (insertValue, user) => {
  bcrypt.compare(insertValue.password, user.password).then((isValid) => {
    if (!isValid) {
      // eslint-disable-next-line no-console
      console.log('Password not correct!');
    } else {
      // eslint-disable-next-line no-console
      console.log('All Done!');
    }
  });
};

export const hashPassAndAuthToken = (userData, fn) => {
  bcrypt.hash(userData.confirm_user, 10).then((activationToken) => {
    bcrypt.hash(userData.password, 10).then((hashedPassword) => {
      const insertValue = {
        name: userData.name,
        surname: userData.surname,
        email: userData.email,
        password: hashedPassword,
        // eslint-disable-next-line
        is_active: userData.is_active,
        // eslint-disable-next-line
        confirm_user: activationToken,
      };
      fn(insertValue);
    });
  });
};
