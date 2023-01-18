<script lang='ts'>
	import Icon from '$lib/Icon.svelte';
	import { onMount } from 'svelte';

	export let liked = false;

	let left: HTMLElement;
	let leftHeight: number = 25;

	onMount(() => {
		leftHeight = (left?.offsetHeight - 35) || 25;
	});

	function like() {
		liked = !liked;
	}
</script>

<div class='post'>
	<div class='left' bind:this={left}>
		<img class='interactive' src='https://via.placeholder.com/50' alt='Niklas Eeroson profile picture' />
		<div class='interactive' on:click={like}>
			{#if liked}
				<Icon icon='heart-solid' />
			{:else }
				<Icon icon='heart' />
			{/if}
		</div>
	</div>
	<div class='triangle' style='--left-height: {leftHeight}px'></div>
	<div class='bubble'>
		<h2 class='name'>Niklas Eeroson</h2>
		<p>
			What the fuck did you just fucking say about me, you little puto? I'll
			have you know I graduated top of my class at the University of
			Havana, and I've been involved in numerous secret raids on Batista,
			and I have over 300 confirmed kills. I am trained in guerrilla warfare
			and I'm the top rifleman in the entire M-26-7 armed forces. You are
			nothing to me but just another reactionary. I will wipe you the fuck
			out with precision the likes of which has never been seen before on
			this Earth, mark my fucking words. You think you can get away with
			saying that shit to me over the radio? Think again, fucker. As we
			speak I am contacting my secret network of spies across the USSR
			and your bases are being pictured right now so you better prepare
			for the storm, maggot. The storm that wipes out the pathetic little
			thing you call your life. You're fucking dead, escoria. I can be
			anywhere, anytime, and I can kill you in over seven hundred ways,
			and that's just with my bare hands. Not only am I extensively
			trained in unarmed combat, but I have access to the entire arsenal
			of Soviet missiles and I will use them to their full extent to wipe
			your miserable ass off the face of my island, you little shit. If only
			you could have known what unholy retribution your little "clever"
			comment was about to bring down upon you, maybe you would
		</p>
	</div>
</div>

<style lang='postcss'>
    .post {
        img {
            border-radius: 100%;
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
            font-size: 16px;
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
