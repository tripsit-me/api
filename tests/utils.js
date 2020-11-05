'use strict';

const path = require('path');
require('dotenv').config({ path: path.resolve('.env.test') });
const knex = require('knex');
const knexConfig = require('../knexfile');
const createServer = require('../server');
const createLogger = require('../logger');

const db = knex(knexConfig);

const logger = createLogger();

const app = createServer({ db, logger });

module.exports = { app, logger, db };
