'use strict';

const path = require('path');

module.exports = {
	root: true,
	env: { node: true },
	rules: {
		indent: [2, 'tab'],
		'no-tabs': 0,
		'arrow-parens': [2, 'as-needed'],
	},
	overrides: [
		{
			files: ['**/*.js'],
			extends: 'airbnb-base',
			parserOptions: { sourceType: 'script' },
			rules: {
				strict: [2, 'global'],
				indent: [2, 'tab'],
				'no-tabs': 0,
			},
		},
		{
			files: ['**/*.ts'],
			extends: 'airbnb-typescript',
			parserOptions: { project: path.resolve('tsconfig.json') },
			rules: {
				'@typescript-eslint/indent': [2, 'tab'],
				'no-tabs': 0,
			},
		},
		{
			files: [
				'**/__tests__/*.ts',
				'**/__mocks__/*.ts',
				'tests/**/*.test.ts',
			],
			env: { jest: true },
			plugins: ['jest'],
			rules: {
				camelcase: 0,
				'import/no-extraneous-dependencies': [2, {
					devDependencies: true,
				}],
			},
		},
		{
			files: ['.eslintrc.js'],
			parserOptions: { sourceType: 'script' },
			rules: {
				strict: [2, 'global'],
			},
		},
	],
};
