<script>
	import { db } from '../../../lib/firebase';
	import { collection, onSnapshot, query } from 'firebase/firestore';
	import { authStore } from '../../../store/store';

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
	<h1 style="padding-left: 10%; font-size: 4rem">There is no Article sent by you.</h1>
{/if}
<h1 style="font-size: 3rem; padding-left:6%; padding-top: 5%">
	Here is the list of articles sent by the user you.
</h1>

<section style="display: flex; padding:5%; flex-wrap: wrap;">
	{#each data as item}
		{#if item.confirmed == true}
			<div class="p-4 md:w-1/3">
				<div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
					<div class="p-6">
						<a
							href="/articles/{userId}/{item.heading}"
							class="title-font text-lg font-medium text-gray-900 mb-3"
							>{item.heading} State: {item.confirmed}</a
						>
					</div>
				</div>
			</div>
		{:else}
			<div class="p-4 md:w-1/3">
				<div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
					<div class="p-6">
						<p class="title-font text-lg font-medium text-gray-900 mb-3">
							{item.heading} State: {item.confirmed}
						</p>
					</div>
				</div>
			</div>
			<hr />
		{/if}
	{/each}
</section>
