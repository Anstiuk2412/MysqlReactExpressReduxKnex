import dotenv from 'dotenv';
import knex from 'knex';

const pathToEnv = new URL('../.env', import.meta.url).pathname;
dotenv.config({ path: pathToEnv });

const config = {
  development: {
    client: 'mysql2',
    connection: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
    },
    migrations: {
      directory: './migrations',
      loadExtensions: ['.js'],
    },
  },
};

export const myKnex = knex(config['development']);

export default config;
