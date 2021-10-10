
export const up = (knex) => {
    return knex.schema.createTable('shared_files', (table) => {
        table.increments('id');
        table.integer('file_id').notNullable().unsigned().references('id').inTable('files');
        table.integer('user_id').notNullable().unsigned().references('id').inTable('users');
        table.integer('to_user_id').notNullable().unsigned().references('id').inTable('users');
        table.timestamps(true, true);
    })
}

export const down = (knex) => {
    return knex.schema.dropTable('shared_files');
}