<script lang='ts'>
	import { loggedIn } from '../../stores.js';
	import About from './About.svelte';
	import { goto } from '$app/navigation';
	import AccountSwitcher from './AccountSwitcher.svelte';
	import Copy from '$lib/Copy.svelte';

	const paths: App.Paths = [
		{ href: '/', title: 'Home', disabled: false },
		{ href: '/sessions', title: 'Sessions', disabled: true },
		{ href: '/settings', title: 'Settings', disabled: false },
	];

	function logout() {
		$loggedIn = false;
		goto('.');
	}
</script>

<svelte:head>
	{#if !$loggedIn }
		<title>About GUILD</title>
	{/if}
</svelte:head>

{#if $loggedIn}
	<div id='page'>
		<header>
			<div class='top'>
				<img id='logo' src='logo.png' alt='GUILD logo'>
				<nav>
					{#each paths as { href, title, disabled } (href)}
						{#if !disabled}
							<div class='nav-item'><a {href}>{title}</a></div>
						{:else}
							<div class='nav-item disabled'><a href=''>{title}</a></div>
						{/if}
					{/each}
				</nav>
			</div>
			<div class='bottom'>
				<AccountSwitcher />
				<div class='nav-item' on:click={logout}><a href='#'>Logout</a></div>
				<br>
				<Copy />
			</div>
		</header>
		<main id='content'>
			<slot />
		</main>
		<div id='spacer'></div>
	</div>
{:else}
	<About />
{/if}

<style lang='postcss'>
    #page {
        margin: 0 auto;
        max-width: 1080px;
        display: grid;
        grid-template-columns: 1.2fr 2.5fr 1fr;
    }

    header {
        #logo {
            margin: 10px 0 20px;
            height: 4rem;
        }

        nav {
            .nav-item {
                a {
                    &:hover {
                        border: none;
                    }

                    padding: 5px 0;
                    margin: 0;
                }

                &.disabled {
                    &::after {
                        content: 'soon';
                        font-size: 14px;
                        transform: rotateZ(20deg) translate(-20px, 5px);
                        color: var(--text);
                    }

                    a {
                        cursor: default;
                    }

                    color: rgb(128, 128, 128);
                }

                display: flex;
                font-weight: bold;
                font-size: 22px;
            }
        }

        position: sticky;
        top: 0;
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-between;
        padding-right: 20px;
        height: 100vh;
    }

    #content {
        margin-top: 10px;
    }
</style>
