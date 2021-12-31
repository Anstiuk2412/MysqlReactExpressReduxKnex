export const up = (knex) => {
  return knex.schema.table('folders', (table) => {
    table.setNullable('parent_id');
  });
};

export const down = (knex) => {
  return knex.schema.dropNullable('parent_id');
};
