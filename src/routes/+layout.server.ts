import type { LayoutServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: LayoutServerLoad = ({ locals }) => {
	const user = locals.user ?? {};

	if (!user) {
		throw redirect(307, '/login');
	}

	return { user };
};
