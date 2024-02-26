<script>
	import { db } from '../../lib/firebase';
	import { collection, onSnapshot, query } from 'firebase/firestore';
	import { authStore } from '../../store/store';

	const userId = $authStore.data.email;
	const colRef = collection(db, userId);
	let data = [];

	async function fetchData() {
		try {
			onSnapshot(query(colRef), (snapshot) => {
				data = []; // Resetting the data array, this might not be necessary
				snapshot.docs.forEach((doc) => {
					if (doc.data().heading !== undefined || doc.data().confirmed !== undefined) {
						data.push({ heading: doc.data().heading, confirmed: doc.data().confirmed });
					}
				});
			});
		} catch (error) {
			console.error('Error fetching document:', error);
		}
	}

	fetchData().then(() => {
		// Data fetched, Svelte will automatically update the UI
	});
</script>

{#if data.length == 0}
	<h1>There is no Article sent by you</h1>
{/if}
{#each data as item}
	{#if item.confirmed == true}
		<div>
			<a href="/articles/{userId}/{item.heading}">{item.heading}. State: {item.confirmed}</a>
			<hr />
		</div>
	{:else}
		<p>{item.heading}. State: {item.confirmed}</p>
	{/if}
{/each}
