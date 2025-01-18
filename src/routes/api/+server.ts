import type { RequestHandler } from './$types';
import orm from '$lib/server/database';
import User from '$lib/server/entities/User';
import { error } from '@sveltejs/kit';
import * as bcrypt from 'bcrypt';
import { PEPPER } from '$env/static/private';

export const GET: RequestHandler = async (): Promise<Response> => {
	const em = orm.em.fork();
	em.findOne(User, { displayName: 'Falcon' });
	return new Response('Hello Falcon!');
};

// Creating a user
export const POST: RequestHandler = async ({ request }) => {
	const em = orm.em.fork();
	const user = new User('Filip', 'Falcon');
	user.password = await bcrypt.hash('Heslo' + PEPPER, 10);
	await em.persistAndFlush(user);
	return new Response(null, { status: 200 });
};
