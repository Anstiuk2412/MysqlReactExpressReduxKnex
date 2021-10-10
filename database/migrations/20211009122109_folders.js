
export const up = (knex) => {
    return knex.schema.createTable('folders', (table) => {
        table.increments('id');
        table.string('name').notNullable();
        table.integer('user_id').notNullable().unsigned().references('id').inTable('users');
        table.integer('parent_id').notNullable();
        table.timestamps(true, true);
    })
}

export const down = (knex) => {
    return knex.schema.dropTable('folders');
}