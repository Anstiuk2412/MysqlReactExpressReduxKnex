import { myKnex } from '../knexfile.js';

export const where = async (table, query) => {
  return myKnex(table).select().where(query);
};

export const insert = async (table, conditions) => {
  return myKnex(table).insert(conditions);
};

export const update = async (table, conditions) => {
  return myKnex(table).where({ id: conditions.id }).update(conditions);
};

export const selectFirst = async (table, conditions) => {
  return myKnex(table).select().where(conditions).first();
};

export const upsert = async (table, data, key, mergeValue) => {
  return myKnex(table).insert(data).onConflict(key).merge([mergeValue]);
};

export const save = async (table, conditions, key, mergeValue) => {
  if (conditions.id) {
    return update(table, conditions);
  } else {
    return upsert(table, conditions, key, mergeValue);
  }
};
