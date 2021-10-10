
export const up = (knex) => {
    return knex.schema.createTable('file_links', (table) => {
        table.increments('id');
        table.integer('user_id').notNullable().unsigned().references('id').inTable('users');
        table.integer('file_id').notNullable().unsigned().references('id').inTable('files');
        table.string('tokken_confirm').notNullable();
        table.timestamps(true, true);
    })
}

export const down = (knex) => {
    return knex.schema.dropTable('file_links');
}