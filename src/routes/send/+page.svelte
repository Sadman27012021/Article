<script>
	import { db } from '../../lib/firebase';
	import { doc, setDoc, getDoc } from 'firebase/firestore';
	import { authStore } from '../../store/store';
	let data = { heading: '', body: '', confirmed: false };
	let error = '';

	async function send() {
		error = 'Please Enter the Details';
		const docRef = doc(db, $authStore.data.email, data.heading);
		const docSnap = await getDoc(docRef);
		if (!docSnap.exists() && data.body && data.heading) {
			const articleRef = doc(db, $authStore.data.email, data.heading);
			await setDoc(articleRef, data);
		}
		window.location.href = '/user';
	}
</script>

<div>
	{#if !data.body || !data.heading}
		{error}
	{/if}
</div>
<div>
	<form>
		<h1>Send Article</h1>
		<label>
			<p>Heading: Give a heading to the article!</p>
			<input class="input" bind:value={data.heading} type="text" />
		</label>
		<label>
			<p>Body: Here goes the main article!</p>
			<input class="input" bind:value={data.body} type="text" />
		</label>

		<button on:click={send} type="button" class="submitBtn"> Submit </button>
	</form>
</div>

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
