export const up = (knex) => {
  return knex.schema.createTable('shared_files', (table) => {
    table.increments('id');
    table.integer('file_id').notNullable();
    table.integer('user_id').notNullable();
    table.integer('to_user_id').notNullable();
    table.timestamps(true, true);
  });
};

export const down = (knex) => {
  return knex.schema.dropTable('shared_files');
};
