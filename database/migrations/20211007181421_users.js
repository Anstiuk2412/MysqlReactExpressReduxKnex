export const up = (knex) => {
  return knex.schema.createTable('users', (table) => {
    table.increments('id');
    table.string('name').notNullable();
    table.string('surname').notNullable();
    table.string('email').notNullable().unique();
    table.string('password').notNullable();
    table.boolean('is_active').notNullable();
    table.string('confirm_user').notNullable();
    table.timestamps(true, true);
  });
};

export const down = (knex) => {
  return knex.schema.dropTable('users');
};
