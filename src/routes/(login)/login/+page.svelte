<script lang='ts'>
	import { loggedIn } from '../../../stores';
	import { goto } from '$app/navigation';

	function submitForm() {
		$loggedIn = true;
		goto('/');
	}
</script>

<h1 class='noselect'>Login</h1>
<br>
<form id='login' method='post'>
	<div class='input'>
		<input type='email' name='email' id='email' placeholder='Email'>
	</div>
	<div class='input'>
		<input type='password' name='password' id='password' placeholder='Password'>
	</div>
	<br>
	<div class='input'>
		<input type='submit' value='Login'>
	</div>
	<div class='input small'>
		<input class='plain' type='button' value='Forgotten password' on:click={()=>goto('/reset-password')}>
	</div>
</form>
