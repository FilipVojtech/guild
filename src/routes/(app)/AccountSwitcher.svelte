<script lang='ts'>
	import Icon from '$lib/Icon.svelte';
</script>

<div id='switcher'>
	<div class='row' id='character'>
		<div class='button' id='profile'>Niklas Eeroson</div>
		<div class='button secondary' id='options'>
			<Icon icon='chevron-solid' direction='down' />
		</div>
	</div>
	<hr>
	<div class='row' id='user'>
		<div class='button'>Falcon</div>
		<a href='/logout' class='button secondary' id='logout'>
			<Icon icon='sign-out-solid' color='red' />
		</a>
	</div>
</div>

<style lang='postcss'>
    #switcher {
        border-radius: 15px;
        border: 3px solid;
    }

    .row {
        display: flex;
        align-items: center;
        padding: 0 5px;
        font-weight: bold;
        flex-grow: 1;
    }

    .button {
        &:hover {
            filter: opacity(0.5);
        }

        &.secondary {
            flex: 0;
            aspect-ratio: 1 / 1;
        }

        cursor: pointer;
        padding: 10px 0;
        flex-grow: 1;
    }
</style>
