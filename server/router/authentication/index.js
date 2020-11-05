'use strict';

const applyCreateUser = require('./create-user');

module.exports = function applyAuthentication(...args) {
	applyCreateUser(...args);
};
