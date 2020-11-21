'use strict';

module.exports = {
	testEnvironment: 'node',
	testMatch: [
		'<rootDir>/__tests__/*.test.js',
		'<rootDir>/server/**/__tests__/*.test.js',
	],
	coveragePathIgnorePatterns: ['/node_modules/'],
};
