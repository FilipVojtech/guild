<script lang='ts'>
	import Icon from '$lib/Icon.svelte';
	import { onMount } from 'svelte';
	import { fade, scale } from 'svelte/transition';

	export let author = {
		character: {
			name: '',
			handle: '',
			picture: '',
		},
		user: { name: '', picture: '' },
	};
	export let text: string;
	export let likes;
	export let liked = false;

	let left: HTMLElement;
	let leftHeight: number = 25;

	onMount(() => {
		leftHeight = (left?.offsetHeight - 35) || 25;
		likes = Math.floor(Math.random() * 500);
	});

	function like() {
		liked = !liked;
	}
</script>

<div class='post'>
	<div class='left' bind:this={left}>
		<!--svelte-ignore a11y-img-redundant-alt-->
		<a href='/{author.character.handle}'>
			<img class='interactive' src='{author.character.picture}' alt='{author.character.name} profile picture' />
		</a>
		<div class='interactive' on:click={like} on:keyup={like}>
			{#if liked}
				<div in:scale>
					<Icon icon='heart-solid' />
				</div>
			{:else }
				<div in:fade={{duration: 150}}>
					<Icon icon='heart' />
				</div>
			{/if}
		</div>
		{#if likes}
			<div class='interactive' id='likes'>
				{likes}
			</div>
		{/if}
	</div>
	<div class='triangle' style='--left-height: {leftHeight}px'></div>
	<div class='bubble'>
		<a href='/{author.character.handle}'><h2 class='name'>{author.character.name}</h2></a>
		<p>{text}</p>
	</div>
</div>

<style lang='postcss'>
    .post {
        img {
            border-radius: 100%;
            width: 50px;
        }

        .bubble {
            .name {
                font-weight: bold;
                font-size: 18px;
                margin-bottom: 10px;
            }

            background-color: var(--theme-background);
            padding: 15px 10px 10px;
            border-radius: 15px;
            font-size: 15px;
            line-height: 1.1;
        }

        #likes {
            &:hover {
                background-color: rgba(256, 256, 256, 0.3);
                padding: 0 10px;
                border-radius: 5px;
            }

            user-select: none;
        }

        display: flex;
        flex-flow: row nowrap;
        margin-bottom: 10px;
    }

    .left {
        position: sticky;
        top: 10px;
        display: flex;
        flex-flow: column nowrap;
        flex-shrink: 0;
        align-items: center;
        margin-right: 7px;
        height: min-content;

        > * {
            margin-bottom: 10px;
        }
    }

    .triangle {
        position: sticky;
        top: 25px;
        margin-bottom: var(--left-height);
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 10px 10px 10px 0;
        border-color: transparent var(--theme-background) transparent transparent;
        transform: rotate(0deg);
        margin-top: 15px
    }
</style>
