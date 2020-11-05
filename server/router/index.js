'use strict';

const createRouter = require('express-promise-router');
const applyAuthentication = require('./authentication');

module.exports = function applyRouter({ app, db }) {
	const router = createRouter();
	applyAuthentication({ router, db });
	app.use('/api', router);
};
