import config from '../knexfile.js';
import knex from 'knex';

const findUser = (query) => {
  knex(config['development'])
    .select()
    .from('users')
    .where(query)
    // .raw(`SELECT * FROM users ${query}`)
    .then((userinfo) => {
      // eslint-disable-next-line no-console
      console.log(userinfo);
    });
};

export const findUserWhere = (column, value) => {
  const query = { [column]: value };
  findUser(query);
};

export const getAuhUser = (email, password) => {
  const query = {
    email: email,
    password: password,
  };
  findUser(query);
};
