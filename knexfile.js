'use strict';

const knexStringcase = require('knex-stringcase');
const {
	POSTGRES_HOST,
	POSTGRES_USER,
	POSTGRES_PASSWORD,
	POSTGRES_DB,
} = require('./env');

module.exports = knexStringcase({
	client: 'pg',
	connection: {
		host: POSTGRES_HOST,
		user: POSTGRES_USER,
		password: POSTGRES_PASSWORD,
		database: POSTGRES_DB,
	},
});
