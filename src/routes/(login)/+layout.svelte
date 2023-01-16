<script lang='ts'>
	import { loggedIn } from '../../stores';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import Copy from '$lib/Copy.svelte';
	import Transition from '../Transition.svelte';
	import { slide } from 'svelte/transition';

	onMount(() => {
		if ($loggedIn) {
			goto('/');
		}
	});
</script>

<svelte:head>
	<title>Log in to GUILD</title>
</svelte:head>

<div id='content'>
	<!--<h1 id='logo'></h1>-->
	<img id='logo' src='logo.png' alt='Guild logo'>
	<div id='form'>
		<Transition transition={slide}>
			<slot />
		</Transition>
	</div>
	<Copy />
	<!-- Center the login section -->
	<div id='spacer'></div>
</div>

<style>
    #content {
        min-height: 100vh;
        width: 90vw;
        max-width: 450px;
        min-width: 320px;
        margin: 0 auto;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
    }

    #logo {
        width: 300px;
        margin: 0 auto 35px auto;
        user-select: none;
    }

    #form {
        padding: 25px;
        background-color: var(--theme-background);
        border-radius: 30px;
    }

    #spacer {
        /* todo: create --logo-height and script for it */
        height: calc(var(--logo-height, 110px) + 35px);
    }
</style>
