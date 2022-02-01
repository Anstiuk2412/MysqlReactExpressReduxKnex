export const up = (knex) => {
  return knex.schema.table('shared_files', (table) => {
    table.unique(['file_id', 'to_user_id']);
  });
};

export const down = (knex) => {
  return knex.schema.dropUnique(
    ['file_id', 'to_user_id'],
    'shared_files_file_id_to_user_id_unique',
  );
};
