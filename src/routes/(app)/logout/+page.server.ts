import type { ServerLoad } from '@sveltejs/kit';

export const load: ServerLoad = ({ locals, cookies }) => {
	const params = new URLSearchParams();

	cookies.delete('token', { path: '/' });
	locals.user = {
		id: '',
		displayName: '',
	};
	params.set('logout', 'success');

	return {
		redirect: `/?${params}`,
	};
};
