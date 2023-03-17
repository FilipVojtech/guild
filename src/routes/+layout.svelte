<script lang='ts'>
	import type { LayoutData } from './$types';
	import '../app.css';
	import '../form.css';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	export let data: LayoutData;

	$: if (data.user) {
		setContext('user', writable(data.user));
	}
</script>

<slot />

<style>
    .toast {
        position: fixed;
        bottom: 0;
        background-color: var(--success-background);
        color: var(--success-text);
        text-align: center;
        width: 100%;
        padding: 10px;
    }
</style>
