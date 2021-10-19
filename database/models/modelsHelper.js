import knex from 'knex';
import config from '../knexfile.js';

export const Where = (select, table, query) => {
  knex(config['development'])
    .select(select)
    .from(table)
    .where(query)
    .then((info) => {
      // eslint-disable-next-line no-console
      console.log(info);
    });
};
