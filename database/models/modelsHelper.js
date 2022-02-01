import { myKnex } from '../knexfile.js';

export const selectAll = (
  table,
  conditions,
  argument,
  rightTable,
  columnLeftTable,
  columnRightTable,
) => {
  if (argument === 'leftJoin') {
    return myKnex
      .from(table)
      .select()
      .leftJoin(
        rightTable,
        `${rightTable}.${columnRightTable}`,
        `${table}.${columnLeftTable}`,
      )
      .where(conditions)
      .then();
  }
  return myKnex.from(table).select().where(conditions).then();
};

export const whereIn = (table, columnName, array) => {
  return myKnex.from(table).select().whereIn(columnName, array).then();
};

export const insert = (table, conditions) => {
  return myKnex.from(table).insert(conditions).then();
};

export const update = (table, conditions) => {
  return myKnex
    .from(table)
    .where({ id: conditions.id })
    .update(conditions)
    .then();
};

export const selectFirst = (table, conditions) => {
  return myKnex.from(table).select().where(conditions).first().then();
};

export const upsert = (table, data, key, mergeValue) => {
  return myKnex
    .from(table)
    .insert(data)
    .onConflict(key)
    .merge([mergeValue])
    .then();
};

export const save = (table, conditions, key, mergeValue) => {
  if (conditions.id) {
    return update(table, conditions);
  } else {
    return upsert(table, conditions, key, mergeValue);
  }
};
