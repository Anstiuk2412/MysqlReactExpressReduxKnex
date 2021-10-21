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

export const insert = (table, insertValue) => {
  knex(config['development']).insert(insertValue).into(table).then();
};

export const update = (table, InsertValue) => {
  knex(config['development'])
    .where({ email: InsertValue.email })
    .update({
      name: InsertValue.name,
      surname: InsertValue.surname,
      password: InsertValue.password,
    })
    .from(table)
    .then();
};

export const selectFirst = (table, insertValue, then) => {
  knex(config['development'])
    .select()
    .from(table)
    .where(insertValue)
    .first()
    .then(then);
};
