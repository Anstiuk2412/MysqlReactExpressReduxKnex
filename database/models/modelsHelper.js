import knex from 'knex';
import config from '../knexfile.js';

export const Where = (select, table, query) => {
  knex(config['development'])
    .select(select)
    .from(table)
    .where(query)
    .then((user) => {
      // eslint-disable-next-line no-console
      console.log(user);
    });
};

export const Insert = (table, whereKey, whereValue, then) => {
  knex(config['development'])
    .select()
    .from(table)
    .where({ [whereKey]: whereValue })
    .first()
    .then(then);
};
