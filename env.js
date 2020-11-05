'use strict';

if (!process.env.HTTP_PORT) require('dotenv').config(); // eslint-disable-line global-require

exports.NODE_ENV = process.env.NODE_ENV;
exports.HTTP_PORT = parseInt(process.env.HTTP_PORT, 10);

exports.POSTGRES_HOST = process.env.POSTGRES_HOST;
exports.POSTGRES_USER = process.env.POSTGRES_USER;
exports.POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD;
exports.POSTGRES_DB = process.env.POSTGRES_DB;
