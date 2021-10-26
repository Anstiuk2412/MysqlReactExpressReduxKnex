import { where } from './modelsHelper.js';
import knex from 'knex';
import config from '../knexfile.js';

export const getFolder = (folderId) => {
  const query = { id: folderId };
  where('', 'folders', query);
};

export const getFolderByName = (folderName) => {
  const query = { name: folderName };
  where('', 'folders', query);
};

export const openFolder = (folderId) => {
  knex(config['development'])
    .select()
    .from('folders')
    .leftJoin('files', 'folders.id', 'files.folder_id')
    .where({ 'folders.parent_id': folderId })
    .orWhere({ 'folders.id': folderId })
    .options({ nestTables: true, rowMode: 'array' })
    .then((info) => {
      // eslint-disable-next-line no-console
      console.log(info);
    });
};
