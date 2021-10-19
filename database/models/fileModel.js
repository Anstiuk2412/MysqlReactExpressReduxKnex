import config from '../knexfile.js';
import knex from 'knex';

const getFiles = (query) => {
  knex(config['development'])
    .select()
    .form('files')
    .where(query)
    .then((userinfo) => {
      // eslint-disable-next-line no-console
      console.log(userinfo);
    });
};

export const openFolder = (folderId) => {
  const query = `folder_id = ${folderId}'`;
  getFiles(query);
};
