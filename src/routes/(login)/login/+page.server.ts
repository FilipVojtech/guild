import type { Actions } from './$types';
import orm from '$lib/server/database';
import User from '$lib/server/entities/User';
import { fail, redirect } from '@sveltejs/kit';
import { compare } from 'bcrypt';
import { PEPPER, TOKEN_SECRET } from '$env/static/private';
import * as jwt from 'jsonwebtoken';

export const actions: Actions = {
	login: async ({ cookies, request }) => {
		const em = orm.em.fork();
		const data = await request.formData();
		const login = data.get('login');
		const password = data.get('password') ?? null;

		// Check if login provided
		if (!login || !password) {
			return fail(400, { login, missing: true });
		}

		// retrieve user from DB using login
		const user = await em.findOne(User, { login: login.toString() });
		if (!user || !(await compare(password + PEPPER, user.password))) {
			return fail(400, { login, incorrect: true });
		}
		// create JWT token>
		const userToken = {
			displayName: user.displayName,
			id: user.id,
			login: user.login,
		};
		const fifteenMinutes = 15 * 60 * 1000;
		const token = jwt.sign(userToken, TOKEN_SECRET, { expiresIn: fifteenMinutes });
		// send JWT token to frontend
		const now = new Date();
		const date = new Date(new Date().setMinutes(now.getMinutes() + fifteenMinutes));
		cookies.set('token', token, { expires: date, sameSite: 'strict' });
		throw redirect(303, '/');
	},
};
