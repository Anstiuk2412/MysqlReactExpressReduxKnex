export const up = (knex) => {
  return knex.schema.table('users', function (table) {
    table.dropColumn('surname');
  });
};

export const down = (knex) => {
  return knex.schema.table('users', (table) => {
    table.string('surname');
  });
};
