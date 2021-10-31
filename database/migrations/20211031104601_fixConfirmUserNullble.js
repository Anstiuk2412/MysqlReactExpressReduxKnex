export const up = (knex) => {
  return knex.schema.table('users', (table) => {
    table.setNullable('confirm_user');
  });
};

export const down = (knex) => {
  return knex.schema.dropNullable('confirm_user');
};
