export const up = (knex) => {
    return knex.schema.table('users', function (table) {
        table.dropColumn('is_active');
    });
};

export const down = (knex) => {
    return knex.schema.table('users', (table) => {
        table.string('is_active');
    });
};