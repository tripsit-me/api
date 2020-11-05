'use strict';

const knex = require('knex');
const sql = require('fake-tag');
const knexConfig = require('../knexfile');
const {
	POSTGRES_HOST,
	POSTGRES_USER,
	POSTGRES_PASSWORD,
	POSTGRES_DB,
} = require('../env');

const testDbName = `${POSTGRES_DB}_test`;

const db = knex({
	client: 'pg',
	connection: {
		host: POSTGRES_HOST,
		user: POSTGRES_USER,
		password: POSTGRES_PASSWORD,
	},
});

db.raw(sql`DROP DATABASE IF EXISTS ${testDbName};`)
	.then(() => db.raw(sql`CREATE DATABASE ${testDbName};`))
	.then(() => db.raw(sql`GRANT ALL PRIVILEGES ON DATABASE ${testDbName} TO tripsit_api;`))
	.then(() => knex(knexConfig));
