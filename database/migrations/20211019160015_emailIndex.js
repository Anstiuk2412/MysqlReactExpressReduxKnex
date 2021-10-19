export const up = (knex) => {
  return knex.schema.table('users', (table) => {
    table.unique(['email']);
  });
};

export const down = (knex) => {
  return knex.schema.dropUnique('email', 'email');
};
