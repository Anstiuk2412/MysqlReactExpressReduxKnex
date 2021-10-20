import knex from 'knex';
import config from '../knexfile.js';

export const where = (select, table, query) => {
  knex(config['development'])
    .select(select)
    .from(table)
    .where(query)
    .then((user) => {
      // eslint-disable-next-line no-console
      console.log(user);
    });
};

export const insert = (table, insertValue, res) => {
  knex(config['development'])
    .insert(insertValue)
    .into(table)
    .then(() => {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify('All Done!'));
    })
    .catch((err) => {
      res.writeHead(401, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(err));
    });
};

export const selectFirst = (table, insertValue, then) => {
  knex(config['development'])
    .select()
    .from(table)
    .where(insertValue)
    .first()
    .then(then);
};
