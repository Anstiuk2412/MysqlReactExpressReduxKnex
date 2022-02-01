import { myKnex } from '../knexfile.js';

export const where = (table, query) => {
  return myKnex.from(table).select().where(query).then();
};

export const whereIn = (table, columnName, array) => {
  return myKnex.from(table).select().whereIn(columnName, array).then();
};

export const leftJoinWhere = (
  leftTable,
  rightTable,
  columnLeftTable,
  columnRightTable,
  conditions,
) => {
  return myKnex
    .from(leftTable)
    .select()
    .leftJoin(
      rightTable,
      `${rightTable}.${columnRightTable}`,
      `${leftTable}.${columnLeftTable}`,
    )
    .where(conditions)
    .then();
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
