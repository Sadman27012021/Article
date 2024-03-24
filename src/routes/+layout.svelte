<script>
	import { onMount } from 'svelte';
	import { auth, db } from '../lib/firebase';
	import {
		getDoc,
		doc,
		setDoc,
		updateDoc,
		onSnapshot,
		collection,
		query
	} from 'firebase/firestore';
	import { authStore } from '../store/store';

	const AuthRoutes = ['/user', '/send', '/myArticles'];

	onMount(() => {
		const unsubscribe = auth.onAuthStateChanged(async (user) => {
			const currentPath = window.location.pathname;

			if (!user && AuthRoutes.includes(currentPath)) {
				window.location.href = '/';
				return;
			}

			if (user && currentPath === '/auth') {
				window.location.href = '/user';
				return;
			}
			if (user && currentPath === '/') {
				window.location.href = '/user';
				return;
			}

			if (!user) {
				return;
			}
			const listRef = doc(db, 'ref', 'colRef');
			const docRef = doc(db, user.email, 'user');
			const docSnap = await getDoc(docRef);
			const email = user.email;

			let username = '';
			for (let i = 0; i < email.length; i++) {
				const char = email[i];
				if (char === '@') {
					// Stop iterating when '@' is found
					break;
				} else {
					// Add the character to the part before '@'
					username += char;
				}
			}
			username = username.toUpperCase();
			const data = {
				email: user.email,
				username: username
			};

			if (!docSnap.exists()) {
				const userRef = doc(db, user.email, 'user');
				await setDoc(userRef, data);
			}
			getDoc(listRef).then((docSnapshot) => {
				if (!docSnapshot.data().array.includes(email)) {
					const existingArray = docSnapshot.data().array || [];
					const updatedArray = [...existingArray, email];
					return updateDoc(listRef, { array: updatedArray });
				}
			});
			await getDoc(listRef).then((docSnapshot) => {
				const docRef = doc(db, 'ref', 'docRef');
				const list = docSnapshot.data().array;
				for (let i of list) {
					let colRef = collection(db, i);
					onSnapshot(query(colRef), (snapshot) => {
						snapshot.docs.forEach((doc) => {
							getDoc(docRef).then((docSnapshot) => {
								const data = { heading: doc.data().heading, confirmed: doc.data().confirmed };
								let ref = docSnapshot.data().array;
								const containsObject = ref.some((obj) => {
									return obj.heading === data.heading && obj.confirmed === data.confirmed;
								});
								if (!containsObject) {
									if (doc.data().heading !== undefined || doc.data().confirmation !== undefined) {
										const existingArray = docSnapshot.data().array || [];
										const updatedArray = [...existingArray, data];
										return updateDoc(docRef, { array: updatedArray });
									}
								}
							});
						});
					});
				}
			});
			authStore.update(() => {
				return {
					user,
					data: data
				};
			});
		});
		return unsubscribe;
	});
</script>

<div class="navbar"></div>
<div class="mainContainer">
	<slot />
</div>

<style>
	.mainContainer {
		min-height: 100vh;
		/* background: linear-gradient(to right, #000428, #000046); */
		/* color: white; */
		position: relative;
		display: flex;
		flex-direction: column;
	}
</style>
