export const up = (knex) => {
    return knex.schema.createTable('files', (table) => {
        table.increments('id');
        table.integer('user_id').notNullable().unsigned().references('id').inTable('users');
        table.integer('folder_id').notNullable().unsigned().references('id').inTable('folders');
        table.string('name').notNullable();
        table.float('file_size').notNullable();
        table.timestamps(true, true);
    })
}

export const down = (knex) => {
    return knex.schema.dropTable('files');
}