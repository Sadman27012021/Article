<script>
	import { db } from '../../../../lib/firebase';
	import { doc, getDoc } from 'firebase/firestore';
	import { page } from '$app/stores';

	const userId = $page.params.userId;
	const article = $page.params.article;
	const docRef = doc(db, userId, article);

	let heading = '';
	let body = '';
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
			const docSnapshot = await getDoc(docRef);
			heading = docSnapshot.data().heading;
			body = docSnapshot.data().body;
		} catch (error) {
			console.error('Error fetching document:', error);
		}
	}

	fetchData().then(() => {
		// Data fetched, Svelte will automatically update the UI
	});
</script>

<h1>{heading}</h1>
<h3>Written by, {username}</h3>
<p>{body}</p>
