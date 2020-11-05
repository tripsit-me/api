'use strict';

require('dotenv').config();
const knex = require('knex');
const knexConfig = require('./knexfile');
const createServer = require('./server');
const createLogger = require('./logger');

const db = knex(knexConfig);
const logger = createLogger();
createServer({ db, logger });
