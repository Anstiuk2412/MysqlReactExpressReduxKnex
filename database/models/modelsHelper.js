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
  return myKnex.from(table).select().where(conditions).first().then();
};

export const selectAll = (table, conditions) => {
  return myKnex(table).select().where(conditions);
};

export const upsert = (table, data, key, mergeValue) => {
  return myKnex(table).insert(data).onConflict(key).merge([mergeValue]);
};

export const save = (table, conditions, key, mergeValue) => {
  if (conditions.id) {
    return update(table, conditions);
  } else {
    return upsert(table, conditions, key, mergeValue);
  }
};
