'use strict';

const request = require('supertest');
const { app, db } = require('./utils');

describe('POST /user', () => {
	beforeEach(async () => db('users').del());

	test('"nick" is required', async () => {
		const res = await request(app)
			.post('/user')
			.send({ password: 'P@ssw0rd' })
			.set('Accept', 'application/json')
			.expect(400);
		expect(res).toBe({});
	});
});
