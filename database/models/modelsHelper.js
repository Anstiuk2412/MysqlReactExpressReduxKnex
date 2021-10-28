import { myKnex } from '../knexfile.js';

export const where = (table, query) => {
  return myKnex(table).select().where(query);
};

export const insert = (table, insertValue) => {
  return myKnex(table).insert(insertValue);
};

export const update = (table, InsertValue) => {
  return myKnex(table).where({ id: InsertValue.id }).update(InsertValue);
};

export const selectFirst = (table, insertValue) => {
  return myKnex(table).select().where(insertValue).first();
};
