<script>
	import { db } from '../../../../lib/firebase';
	import { collection, onSnapshot, query } from 'firebase/firestore';
	import { page } from '$app/stores';

	const userId = $page.params.userId;
	const colRef = collection(db, userId);
	let data = [];
	let onlyTrue = [];
	let username = '';

	for (let i = 0; i < userId.length; i++) {
		const char = userId[i];
		if (char === '@') {
			// Stop iterating when '@' is found
			break;
		} else {
			// Add the character to the part before '@'
			username += char;
		}
	}
	username = username.toUpperCase();

	async function fetchData() {
		try {
			onSnapshot(query(colRef), (snapshot) => {
				data = []; // Resetting the data array, this might not be necessary
				onlyTrue = [];
				snapshot.docs.forEach((doc) => {
					if (doc.data().heading !== undefined || doc.data().confirmed !== undefined) {
						data.push({ heading: doc.data().heading, confirmed: doc.data().confirmed });
					}
					if (
						(doc.data().heading !== undefined || doc.data().confirmed !== undefined) &&
						doc.data().confirmed == true
					) {
						onlyTrue.push({ heading: doc.data().heading, confirmed: doc.data().confirmed });
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

{#if onlyTrue.length == 0}
	<h1 style="padding-left: 10%; font-size: 4rem">
		There is no Article sent by the user {username}
	</h1>
{/if}
<h1 style="font-size: 3rem; padding-left:6%; padding-top: 5%">
	Here is the list of articles sent by the user {username}
</h1>
<section style="display: flex; padding:5%">
	{#each data as item}
		{#if item.confirmed == true}
			<div class="p-4 md:w-1/3">
				<div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
					<img
						class="lg:h-48 md:h-36 w-full object-cover object-center"
						src="https://dummyimage.com/721x401"
						alt="blog"
					/>
					<div class="p-6">
						<a
							href="/articles/{userId}/{item.heading}"
							class="title-font text-lg font-medium text-gray-900 mb-3">{item.heading}</a
						>
					</div>
				</div>
			</div>
		{/if}
	{/each}
</section>
