import { myKnex } from '../knexfile.js';

export const where = (table, query) => {
  return myKnex(table).select().where(query);
};

export const insert = (table, conditions) => {
  return myKnex(table).insert(conditions);
};

export const update = (table, conditions) => {
  return myKnex(table).where({ id: conditions.id }).update(conditions);
};

export const selectFirst = (table, conditions) => {
  return myKnex(table).select().where(conditions).first();
};

export const upsert = (table, conditions, onConflict, merge) => {
  return myKnex(table).insert(conditions).onConflict(onConflict).merge([merge]);
};
