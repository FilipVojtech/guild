<script lang='ts'>
	import { goto } from '$app/navigation';
	import { getContext } from 'svelte';

	export let data: App.PageData;

	const user = getContext('user');

	if (data?.redirect) {
		$user = {};
		goto(data.redirect, { invalidateAll: true });
	}
</script>
