<script>
	import Post from '$lib/Post.svelte';
	import CreatePost from './CreatePost.svelte';
</script>

<svelte:head>
	<title>GUILD Hall</title>
</svelte:head>

<h1 id='title'>Home</h1>
<CreatePost/>
<div id='posts'>
	{#each Array(10) as _}
		<Post />
	{/each}
</div>

<style>
    #title {
        margin-bottom: 20px;
    }
</style>
