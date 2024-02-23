<script>
	import { db } from '../../../lib/firebase';
	import { doc, setDoc, getDoc } from 'firebase/firestore';
	import { page } from '$app/stores';
	import { PUBLIC_DB_KEY } from '$env/static/public';
	let form = true;
	let content = false;
	let inputkey = '';
	let heading = '';
	let body = '';
	const article = $page.params.article;
	const parts = article.split(',');
	let docRef = doc(db, parts[0], parts[1]);
	function handleAuthenticate() {
		console.log(inputkey);
		if (inputkey == PUBLIC_DB_KEY) {
			form = false;
			content = true;
		} else {
			console.log('False');
		}
		return;
	}
	async function fetchData() {
		await getDoc(docRef).then((docSnapshot) => {
			heading = docSnapshot.data().heading;
			body = docSnapshot.data().body;
		});
	}
	fetchData();
	async function send() {
		docRef = doc(db, parts[0], heading);
		await setDoc(docRef, { heading: heading, body: body, confirmed: true });
		window.location.href = '/admin';
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
	<div>
		{#if !heading || !body}
			<p>Please Enter the Details!!</p>
		{/if}
		<form>
			<h1>Send Article</h1>
			<label>
				<p>Heading: Give a heading to the article!</p>
				<input class="input" bind:value={heading} type="text" />
			</label>
			<label>
				<p>Body: Here goes the main article!</p>
				<input class="input" bind:value={body} type="text" />
			</label>

			<button on:click={send} type="button" class="submitBtn"> Submit </button>
		</form>
	</div>
{/if}

<style>
	.input {
		padding: 10px;
	}
	.submitBtn {
		background: navy;
		color: white;
		border: none;
		padding: 10px 2%;
		border-radius: 5px;
		cursor: pointer;
		font-size: 1rem;
		display: grid;
		place-items: center;
	}
</style>
