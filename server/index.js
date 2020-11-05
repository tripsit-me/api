'use strict';

const express = require('express');
const errorMiddleware = require('./middleware/error');
const applyRouter = require('./router');
const { HTTP_PORT } = require('../env');

module.exports = function createServer({ db, logger }) {
	const app = express();
	const dependencies = { app, db, logger };

	app.use(express.json());
	applyRouter(dependencies);
	app.use(errorMiddleware(dependencies));

	app.listen(HTTP_PORT, error => {
		if (error) throw error;
		console.log(`TripSit API started on port ${HTTP_PORT}.`);
	});

	return app;
};
