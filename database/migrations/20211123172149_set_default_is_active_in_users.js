export const up = (knex) => {
    return knex.schema.table('users', function (table) {
        table.boolean('is_active').notNullable().defaultTo(0);
    });
};

export const down = (knex) => {
    return knex.schema.table('users', (table) => {
        table.dropColumn('is_active');
    });
};