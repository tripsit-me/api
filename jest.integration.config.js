'use strict';

module.exports = {
	testEnvironment: 'node',
	testMatch: ['<rootDir>/tests/**/*.test.js'],
	coveragePathIgnorePatterns: ['/node_modules/'],
	setupFiles: ['<rootDir>/tests/setup.js'],
};
