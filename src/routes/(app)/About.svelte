<script>
	import Copy from '$lib/Copy.svelte';
</script>

	<img id='logo' src='logo.png' alt='GUILD logo'>
<div id='content'>
	<p>
		If you're a member, login button is down here. <span class='note'>(hope it's big enough)</span>
	</p>
	<p>
		If not, tough luck champ.
	</p>

	<a id='login' href='/login'>Log in</a>

	<footer>
		<Copy />
	</footer>
</div>

<style lang='postcss'>
    #content {
        text-align: center;
        vertical-align: center;
    }

    #logo {
        width: 300px;
		margin: 50px auto;
    }

    .note {
        font-size: 14px;
        font-style: italic;
    }

    #login {
        &:hover {
            border-bottom: none;
        }

        padding: 40px 75px;
        font-weight: 600;
        font-size: 72px;
        background-color: var(--theme);
        margin-top: 30px;
		border-radius: 30px;
    }

    footer {
        position: absolute;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
    }
</style>
