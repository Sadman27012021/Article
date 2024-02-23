<script>
	import { PUBLIC_DB_KEY } from '$env/static/public';
	import DataAdmin from '../../components/+DataAdmin.svelte';
	//verification
	let form = true;
	let content = false;
	let inputkey = '';
	function handleAuthenticate() {
		if (inputkey == PUBLIC_DB_KEY) {
			form = false;
			content = true;
		} else {
			console.log('False');
		}
		return;
	}
</script>

{#if form}
	<form>
		<label>
			<input bind:value={inputkey} type="text" placeholder="Key" />
			<button on:click={handleAuthenticate} type="button" class="submitBtn">Submit </button>
		</label>
	</form>
{/if}
{#if content}
	<DataAdmin />
{/if}
