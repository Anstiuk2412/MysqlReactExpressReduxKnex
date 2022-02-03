import { myKnex } from '../knexfile.js';

export const selectAll = (table, conditions, join) => {
  if (!join) {
    return myKnex.from(table).select().where(conditions).then();
  }
  if (join.type === 'left') {
    return myKnex
      .from(table)
      .select()
      .where(conditions)
      .leftJoin(...join.on)
      .then();
  }
  if (join.type === '') {
    return myKnex
      .from(table)
      .select()
      .where(conditions)
      .join(...join.on)
      .then();
  }
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
