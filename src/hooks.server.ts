import type { Handle } from '@sveltejs/kit';
import orm from '$lib/server/database';
import User from '$lib/server/entities/User';
import { verifyToken } from '$lib/server/JWTToken';
import { refreshToken } from './lib/server/JWTToken';
import type { JWTPayload } from 'jose';

export const handle: Handle = async ({ event, resolve }) => {
	const { cookies } = event;
	const cookieToken = cookies.get('token');

	if (!cookieToken) {
		return resolve(event);
	}

	let payload: JWTPayload | null = await verifyToken(cookieToken);
	if (!payload) {
		let refreshedToken = await refreshToken(cookieToken);
		if (!refreshedToken) {
			return resolve(event);
		} else {
			payload = await verifyToken(refreshedToken);
			if (!payload) {
				return resolve(event);
			}
		}
	}

	let user;
	const em = orm.em.fork();

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

	return resolve(event);
};
