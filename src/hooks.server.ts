import type { Handle } from '@sveltejs/kit';
import { verify } from 'jsonwebtoken';
import { TOKEN_SECRET } from '$env/static/private';
import orm from '$lib/server/database';
import User from '$lib/server/entities/User';

export const handle: Handle = async ({ event, resolve }) => {
	const { cookies } = event;
	const token = cookies.get('token');
	const em = orm.em.fork();

	if (token) {
		const jwtUser = verify(token, TOKEN_SECRET);
		if (typeof jwtUser === 'string') {
			throw new Error('Something went wrong');
		}

		let user: any;
		try {
			user = await em.findOne(User, { id: jwtUser.id });
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
