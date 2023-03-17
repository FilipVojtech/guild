import type { Handle } from '@sveltejs/kit';
import * as jose from 'jose';
import { JWT_SECRET } from '$env/static/private';
import orm from '$lib/server/database';
import User from '$lib/server/entities/User';
import { createSecretKey } from 'crypto';

export const handle: Handle = async ({ event, resolve }) => {
	const { cookies } = event;
	const token = cookies.get('token');
	const em = orm.em.fork();

	if (token) {
		const secret = createSecretKey(JWT_SECRET, 'utf-8');
		const { payload, protectedHeader } = await jose.jwtVerify(token, secret);

		let user;
		try {
			user = await em.findOne(User, { id: payload.id! });
		} catch (e) {
			console.error(e);
			return resolve(event);
		}

		if (!user) {
			throw new Error('User not found');
		}

		event.locals.user = {
			id: user.id,
			displayName: user.displayName,
		} as App.SessionUser;
	}

	return resolve(event);
};
