<script>
	import { onMount } from 'svelte';
	import { db } from '../lib/firebase';
	import { collection, onSnapshot, query, getDoc, doc } from 'firebase/firestore';

	const docRef = doc(db, 'ref', 'colRef');
	let list = [];

	// Reactive variable to hold the fetched data
	export let data = [];

	async function fetchUserId() {
		try {
			const docSnapshot = await getDoc(docRef);
			if (docSnapshot.exists()) {
				list = docSnapshot.data().array;
			}
		} catch (error) {
			console.error('Error fetching document:', error);
		}
	}

	onMount(async () => {
		await fetchUserId();

		for (let i of list) {
			let colRef = collection(db, i);
			onSnapshot(query(colRef), (snapshot) => {
				snapshot.docs.forEach((doc) => {
					if (doc.data().heading !== undefined || doc.data().confirmation !== undefined) {
						data = [
							...data,
							{ email: i, heading: doc.data().heading, confirmed: doc.data().confirmed }
						];
					}
					console.log(data);
				});
			});
		}
	});
</script>

{#each data as item}
	{#if item.confirmed !== true}
		<a href="/admin/{item.email},{item.heading}">{item.heading}</a>
	{/if}
{/each}
