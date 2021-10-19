import knex from 'knex';
import config from '../../database/knexfile.js';
import bcrypt from 'bcrypt';

export const login = (req, res) => {
  knex(config['development'])
    .select()
    .from('users')
    .where({ email: req.body.email })
    .first()
    .then((user) => {
      if (!user) {
        res.writeHead(401, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify('User not Found!'));
      } else {
        bcrypt.compare(req.body.password, user.password).then((isValid) => {
          if (!isValid) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify('Password not correct!'));
          } else {
            res.writeHead(401, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify('All Done!'));
          }
        });
      }
    });
};

export const register = (req, res) => {
  bcrypt.hash(req.body.confirm_user, 10).then((activationToken) => {
    bcrypt.hash(req.body.password, 10).then((hashedPassword) => {
      knex(config['development'])
        .insert({
          name: req.body.name,
          surname: req.body.surname,
          email: req.body.email,
          password: hashedPassword,
          // eslint-disable-next-line
          is_active: req.body.is_active,
          // eslint-disable-next-line no-console
          confirm_user: activationToken,
        })
        .into('users')
        .then(() => {
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify('All Done!'));
        })
        .catch((err) => {
          res.writeHead(401, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify(err));
        });
    });
  });
};
