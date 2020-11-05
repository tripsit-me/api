'use strict';

const errorMiddleware = require('../error');
const env = require('../../../env');

jest.mock('../../../env');

const next = jest.fn();
const logger = { error: jest.fn() };
const res = {
	status: jest.fn(),
	json: jest.fn(),
	send: jest.fn(),
};

afterEach(() => {
	next.mockClear();
	logger.error.mockClear();
	res.status.mockClear();
	res.json.mockClear();
	res.send.mockClear();
	env.NODE_ENV = 'test';
});

test('If headers are sent go to next middleware', () => {
	const error = new Error('AYYO SHIT BROKEN');
	errorMiddleware({ logger })(null, { ...res, headersSent: true }, next, error);
	expect(logger.error).toHaveBeenCalledWith(error);
	expect(next).toHaveBeenCalledWith(error);
	expect(res.status).not.toHaveBeenCalled();
	expect(res.json).not.toHaveBeenCalled();
	expect(res.send).not.toHaveBeenCalled();
});

test('If headers are not sent and environment isn\'t production send a 500 response along with the error', () => {
	const error = new Error('OH NO');
	errorMiddleware({ logger })(null, { ...res, headersSent: false }, next, error);
	expect(logger.error).toHaveBeenCalledWith(error);
	expect(next).not.toHaveBeenCalled();
	expect(res.status).toHaveBeenCalledWith(500);
	expect(res.json).toHaveBeenCalledWith(error);
	expect(res.send).not.toHaveBeenCalled();
});

test('If headers are not sent and environment is production send an empty 500 response', () => {
	env.NODE_ENV = 'production';
	const error = new Error('OH NO');
	errorMiddleware({ logger })(null, { ...res, headersSent: false }, next, error);
	expect(logger.error).toHaveBeenCalledWith(error);
	expect(next).not.toHaveBeenCalled();
	expect(res.status).toHaveBeenCalledWith(500);
	expect(res.json).not.toHaveBeenCalled();
	expect(res.send).toHaveBeenCalled();
});
