'use strict';

const env = require('../../env');

module.exports = function errorMiddleware({ logger }) {
	return (req, res, next, error) => {
		logger.error(error);
		if (res.headersSent) next(error);
		else {
			res.status(500);
			if (env.NODE_ENV !== 'production') res.json(error);
			else res.send();
		}
	};
};
