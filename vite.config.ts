import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import viteTs from 'vite-plugin-ts'

const config: UserConfig = {
	plugins: [
		viteTs(),
		sveltekit()
	]
};

export default config;
