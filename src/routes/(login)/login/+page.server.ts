import type { Actions } from './$types';
import orm from '$lib/server/database';
import User from '$lib/server/entities/User';
import { fail, redirect } from '@sveltejs/kit';
import { compare } from 'bcrypt';
import { JWT_AUDIENCE, JWT_ISSUER, JWT_SECRET, PEPPER } from '$env/static/private';
import * as jose from 'jose';
import { createSecretKey } from 'crypto';

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
		const userData = {
			displayName: user.displayName,
			id: user.id,
			login: user.login,
		};
		const secret = createSecretKey(JWT_SECRET, 'utf-8');
		const token = await new jose.SignJWT(userData)
			.setProtectedHeader({ alg: 'HS256' })
			.setIssuedAt()
			.setIssuer(JWT_ISSUER)
			.setAudience(JWT_AUDIENCE)
			.setExpirationTime('15 minutes')
			.sign(secret);

		// send JWT token to frontend
		const now = new Date();
		/** Date fifteen minutes from now */
		const date = new Date(new Date().setMinutes(now.getMinutes() + 15 * 60 * 1000));
		cookies.set('token', token, { expires: date, sameSite: 'strict' });
		throw redirect(303, '/');
	},
};
