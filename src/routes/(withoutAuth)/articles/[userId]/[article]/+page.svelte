<script>
	import { db } from '../../../../../lib/firebase';
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

<h1 style="font-size: 4rem; padding-left: 8%; padding-top: 2%; padding-right: 8%;">{heading}</h1>
<hr />
<h1
	style="font-size: 1.2rem; padding-left: 8%; padding-top: 1%; padding-bottom:1%; padding-right: 8%;"
>
	Written By, {username}
</h1>
<hr />
<p
	style="font-size: 1rem; padding-left: 20%; padding-top: 3%; padding-bottom:1%; padding-right: 20%;"
>
	{body} Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam debitis libero, obcaecati molestiae
	inventore rem praesentium saepe tempora animi consequatur veritatis est omnis voluptatum velit explicabo?
	Ea temporibus magni ex? Aperiam natus cumque expedita! Adipisci cumque ut molestiae tenetur consequuntur
	reprehenderit maxime ex dolorum rerum. Mollitia magni doloribus, architecto dolores omnis quis iste,
	excepturi, aliquid a praesentium obcaecati reiciendis molestias?
</p>

<p
	style="font-size: 1rem; padding-left: 20%; padding-top: 3%; padding-bottom:1%; padding-right: 20%;"
>
	{body} Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam debitis libero, obcaecati molestiae
	inventore rem praesentium saepe tempora animi consequatur veritatis est omnis voluptatum velit explicabo?
	Ea temporibus magni ex? Aperiam natus cumque expedita! Adipisci cumque ut molestiae tenetur consequuntur
	reprehenderit maxime ex dolorum rerum. Mollitia magni doloribus, architecto dolores omnis quis iste,
	excepturi, aliquid a praesentium obcaecati reiciendis molestias?
</p>

<p
	style="font-size: 1rem; padding-left: 20%; padding-top: 3%; padding-bottom:1%; padding-right: 20%;"
>
	{body} Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam debitis libero, obcaecati molestiae
	inventore rem praesentium saepe tempora animi consequatur veritatis est omnis voluptatum velit explicabo?
	Ea temporibus magni ex? Aperiam natus cumque expedita! Adipisci cumque ut molestiae tenetur consequuntur
	reprehenderit maxime ex dolorum rerum. Mollitia magni doloribus, architecto dolores omnis quis iste,
	excepturi, aliquid a praesentium obcaecati reiciendis molestias?
</p>
