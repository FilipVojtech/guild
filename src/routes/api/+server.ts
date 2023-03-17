import type { RequestHandler } from './$types';
import orm from '$lib/server/database';
import User from '$lib/server/entities/User';
import { error } from '@sveltejs/kit';
import { json } from '@sveltejs/kit';

export const GET: RequestHandler = async (): Promise<Response> => {
	return new Response('Hello Falcon!');
};

// Creating a user
// export const POST: RequestHandler = async ({ request }) => {
// 	const data = await request.json();
//
// 	if (!data.login || !data.displayName)
// 		throw error(400, "Request must contain 'login' and 'displayName' fields.");
//
// 	const em = orm.em.fork();
// 	const user = new User(data.login, data.displayName);
// 	await em.persistAndFlush(user);
// 	return new Response(null, { status: 200 });
// };

export const POST: RequestHandler = async (): Promise<Response> => {
	const em = orm.em.fork();
	return json(await em.findOne(User, { login: 'FilipVojtech' }));
};
