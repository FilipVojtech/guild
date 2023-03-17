<script>
	import { goto } from '$app/navigation';
	import Transition from '../../Transition.svelte';
	import { slide } from 'svelte/transition';
</script>

<Transition transition='{slide}'>
<h1 class='noselect'>Reset password</h1>
<br>
<form method='post'>
	<div class='input'>
<!--		<label for='login'>Login</label>-->
		<input type='text' name='login' id='login' placeholder='Login'>
	</div>
	<br>
	<div class='input'>
		<input type='submit' value='Submit'>
	</div>
	<div class='input'>
		<input class='plain' type='button' value='Cancel' on:click={() => goto('/login')}>
	</div>
</form>
</Transition>
