'use strict';

const Yup = require('yup');
const { expressYupMiddleware } = require('express-yup-middleware');
const argon = require('argon2');

const validationMiddleware = expressYupMiddleware({
	schemaValidator: {
		schema: {
			body: {
				yupSchema: Yup.object().shape({
					nick: Yup.string().required().max(32),
					password: Yup.string().required().min(4),
					email: Yup.string().email(),
				}).required(),
			},
		},
	},
});

module.exports = function applyCreateUserRoute({ router, db }) {
	router.post('/user', validationMiddleware, async (req, res) => {
		await db('users').insert({
			passwordHash: await argon.hash(req.body.password),
			nick: req.body.nick,
			email: req.body.email,
		});
		res.sendStatus(201);
	});
};
