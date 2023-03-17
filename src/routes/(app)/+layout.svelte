<script lang='ts'>
	import About from './About.svelte';
	import AccountSwitcher from './AccountSwitcher.svelte';
	import Copy from '$lib/Copy.svelte';
	import Icon from '$lib/Icon.svelte';
	import { getContext } from 'svelte';

	const paths: App.Paths = [
		{ href: '/', title: 'Home', icon: 'home' },
		{ href: '/sessions', title: 'Sessions', disabled: true, icon: 'gamepad' },
		{ href: '/settings', title: 'Settings', icon: 'settings' },
	];

	const user = getContext('user');
	$: loggedIn = !!$user?.id
</script>

<svelte:head>
	{#if !loggedIn }
		<title>About GUILD</title>
	{/if}
</svelte:head>

{#if loggedIn}
	<div id='page'>
		<header>
			<div class='top'>
				<img id='logo' src='logo.png' alt='GUILD logo'>
				<nav>
					{#each paths as { href, title, disabled, icon } (href)}
						<div class='nav-item' class:disabled={disabled}>
							<a href='{disabled ? "" : href}'><span class='icon'><Icon {icon} /></span> {title}</a>
						</div>
					{/each}
				</nav>
			</div>
			<div class='bottom'>
				<AccountSwitcher />
				<div class='breaker'></div>
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
            height: 3.4rem;
        }

        nav {
            .nav-item {
                a {
                    &:hover {
                        border: none;
                    }

                    padding: 5px 0;
                    margin: 0;
                    display: flex;
                    flex-flow: row nowrap;
                    align-items: center;
                }

                &.disabled {
                    &::after {
                        content: 'soon';
                        font-size: 12px;
                        transform: rotateZ(20deg) translate(-20px, 10px);
                        color: var(--text);
                    }

                    a {
                        cursor: default;
                    }

                    filter: opacity(0.5);
                }

                .icon {
                    margin-right: 10px;
                    font-size: initial;
                }

                font-weight: bold;
                font-size: 22px;
                display: flex;
                flex-direction: row;
            }
        }

        .bottom {
            .breaker {
                height: 0.7rem;
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
