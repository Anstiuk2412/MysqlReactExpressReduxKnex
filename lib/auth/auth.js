import bcrypt from 'bcrypt';

export const comparePass = (req, res, user) => {
  bcrypt.compare(req.body.password, user.password).then((isValid) => {
    if (!isValid) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify('Password not correct!'));
    } else {
      res.writeHead(401, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify('All Done!'));
    }
  });
};

export const hashPassAndAuthToken = (req, res, fn) => {
  bcrypt.hash(req.body.confirm_user, 10).then((activationToken) => {
    bcrypt.hash(req.body.password, 10).then((hashedPassword) => {
      const insertValue = {
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        password: hashedPassword,
        // eslint-disable-next-line
        is_active: req.body.is_active,
        // eslint-disable-next-line
        confirm_user: activationToken,
      };
      fn(insertValue, res);
    });
  });
};
