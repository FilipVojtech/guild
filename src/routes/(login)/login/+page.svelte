<script lang='ts'>
	import type { ActionData } from './$types';
	import { goto } from '$app/navigation';
	import { enhance } from '$app/forms';
	import Transition from '../../Transition.svelte';
	import {slide} from 'svelte/transition';

	export let form: ActionData;
</script>


<Transition transition={slide}>
<h1 class='noselect'>Login</h1>
<br>
{#if form?.missing}<p class='form-error'>Email and password are required</p>{/if}
{#if form?.incorrect}<p class='form-error'>Invalid credentials</p>{/if}
<form id='login' method='post' action='?/login' use:enhance>
	<div class='input'>
		<input type='text' name='login' placeholder='Login' value='{form?.login ?? ""}' required>
	</div>
	<div class='input'>
		<input type='password' name='password' placeholder='Password' required>
	</div>
	<br>
	<div class='input'>
		<input type='submit' value='Login'>
	</div>
	<div class='input small'>
		<input class='plain' type='button' value='Forgotten password' on:click={()=>goto('/reset-password')}>
	</div>
</form>
</Transition>
