'use strict';

const path = require('path');
const winston = require('winston');

module.exports = function createLogger() {
	const logger = winston.createLogger({
		level: 'info',
		format: winston.format.simple(),
		defaultMeta: { service: 'tripsit-api' },
		transports: [
			new winston.transports.File({ filename: path.resolve('logs/combined.log') }),
			new winston.transports.File({
				filename: path.resolve('logs/error.log'),
				level: 'error',
			}),
		],
	});

	if (process.env.NODE_ENV !== 'production') {
		logger.add(new winston.transport.Console({ format: winston.format.simple() }));
	}

	return logger;
};
