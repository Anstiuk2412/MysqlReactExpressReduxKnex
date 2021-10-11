
export const up = (knex) => {
    return knex.schema.createTable('file_links', (table) => {
        table.increments('id');
        table.integer('user_id').notNullable();
        table.integer('file_id').notNullable();
        table.string('tokken_confirm').notNullable();
        table.timestamps(true, true);
    })
}

export const down = (knex) => {
    return knex.schema.dropTable('file_links');
}