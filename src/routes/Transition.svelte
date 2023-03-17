<script lang='ts'>
	import { fly } from 'svelte/transition';
	import { page } from '$app/stores';

	$: url = $page.url.href;
	export let transition = fly;
	export let duration = 500;
</script>

{#key url}
	<div
		in:transition={{ x:-5, duration }}
		out:transition={{ x: 5, duration }}
	>
		<slot />
	</div>
{/key}
