<script>
	import { goto } from '$app/navigation';
</script>

<h1 class='noselect'>Reset password</h1>
<br>
<form method='post'>
	<div class='input'>
		<label for='email'></label>
		<input type='email' name='email' id='email' placeholder='Email'>
	</div>
	<br>
	<div class='input'>
		<input type='submit' value='Submit'>
	</div>
	<div class='input'>
		<input class='plain' type='button' value='Cancel' on:click={() => goto('/login')}>
	</div>
</form>
