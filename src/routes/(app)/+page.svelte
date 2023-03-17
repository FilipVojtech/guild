<script lang='ts'>
	import Post from '$lib/Post.svelte';
	import CreatePost from './CreatePost.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>GUILD Hall</title>
</svelte:head>

<h1 id='title'>Home</h1>
<CreatePost />
<div id='posts'>
	{#each data.posts as post}
		<Post {...post} />
	{/each}
</div>

<style>
    #title {
        margin-bottom: 20px;
    }
</style>
