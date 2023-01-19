<script>
	import ThinkBubbles from '$lib/icons/ThinkBubbles.svelte';
</script>

<div class='post'>
	<div class='left'>
		<img class='interactive' src='https://via.placeholder.com/50' alt='Niklas Eeroson profile picture' />
	</div>
	<div class='bubbles'>
		<ThinkBubbles color='var(--theme-background)' />
	</div>
	<div class='bubble'>
		<h2 class='name'>Create post</h2>
		<form method='post'>
			<div class='input'>
				<textarea name='postText' id='postText' rows='6' placeholder='Write something...'></textarea>
			</div>
			<div class='input'>
				<input type='submit' value='Post'>
			</div>
		</form>
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

            width: 100%;
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
        flex-shrink: 0;
    }

    .bubbles {
        margin-top: 15px;
        width: 17px;
    }
</style>
