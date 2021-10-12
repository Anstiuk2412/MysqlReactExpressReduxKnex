export const up = (knex) => {
    return knex.schema.createTable('files', (table) => {
        table.increments('id');
        table.integer('user_id').notNullable();
        table.integer('folder_id').notNullable();
        table.string('name').notNullable();
        table.float('file_size').notNullable();
        table.timestamps(true, true);
    })
}

export const down = (knex) => {
    return knex.schema.dropTable('files');
}