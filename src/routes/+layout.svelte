<script>
	import '../app.css';
	import { onMount } from 'svelte';
	import { auth, db } from '../lib/firebase';
	import { authHandlers } from '../store/store';
	async function handleLogout() {
		await authHandlers.logout();
		window.location.href = '/';
	}
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
	const nonAuthRoutes = ['/', '/auth'];

	onMount(() => {
		const unsubscribe = auth.onAuthStateChanged(async (user) => {
			const currentPath = window.location.pathname;

			if (!user && AuthRoutes.includes(currentPath)) {
				window.location.href = '/';
				return;
			}

			if (user && nonAuthRoutes.includes(currentPath)) {
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

<div class="mainContainer">
	<slot />
</div>

<footer class="text-gray-600 body-font">
	<div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
		<a href="#top" class="flex title-font font-medium items-center mb-4 md:mb-0">
			<img src="./Asset.png" style="width:40px;height:40px;" alt="logo" />
			<span class="ml-3 text-xl">Scientia</span>
		</a>
		<p
			class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4"
		>
			© 2020 Centre of Circle —
			<a
				href="https://www.facebook.com/theCentreofCircle"
				class="text-gray-600 ml-1"
				rel="noopener noreferrer"
				target="_blank">Centre of Circle</a
			>
		</p>
	</div>
</footer>

<style>
	.mainContainer {
		min-height: 100vh;
		background: white;
		/* color: white; */
		position: relative;
		display: flex;
		flex-direction: column;
	}
</style>
