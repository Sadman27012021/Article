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

<h1 style="font-size: 3rem; padding-left: 6%; padding-top: 2%">User sent Articles</h1>
<p style="font-size: 1.2rem; padding-left: 6%">
	This are the user sent articles that the admin may approve to make it public. Click on the link to
	go to the article editing page. Voluptatibus iusto soluta dolore quas magnam dolor? Quis deleniti,
	minima eum ducimus eaque debitis at fugit? Nihil maxime doloremque hic magni illum! Here is the
	fruit of the contribution of you guys!
</p>
<section style="display: flex; padding:5%; flex-wrap: wrap">
	{#each data as item}
		{#if item.confirmed !== true}
			<div class="p-4 md:w-1/3">
				<div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
					<div class="p-6">
						<a
							class="title-font text-lg font-medium text-gray-900 mb-3"
							href="/admin/{item.email},{item.heading}">{item.heading}</a
						>
					</div>
				</div>
			</div>
		{/if}
	{/each}
</section>
