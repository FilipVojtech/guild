// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	interface Locals {
		user: SessionUser;
	}

	interface PageData {
		redirect?: string;
	}

	// interface Error {}
	// interface Platform {}
	type Paths = {
		href: string;
		title: string;
		disabled?: boolean;
		icon: string;
	}[];

	type SessionUser = {
		id: string;
		displayName: string;
	};

	type Toast = {
		text: string;
	};
}
