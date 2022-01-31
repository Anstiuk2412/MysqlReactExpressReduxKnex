export const up = (knex) => {
  return knex.schema.table('file_links', (table) => {
    table.unique(['file_id']);
  });
};

export const down = (knex) => {
  return knex.schema.dropUnique('file_id', 'tokken_confirm');
};
