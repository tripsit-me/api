import Knex from 'knex';
import knex from 'knex';
import knexConfig from '../knexfile';
// import createServer from './server';
// import createLogger from './logger';

const db = knex(knexConfig);
console.log(db);
// const logger = createLogger();
// createServer({ db, logger });
