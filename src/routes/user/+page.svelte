<script>
	import { authHandlers } from '../../store/store';
	import { authStore } from '../../store/store';
	let username = '';
	authStore.subscribe((curr) => {
		username = curr.data.username;
	});
	let userId = '';
	authStore.subscribe((curr) => {
		userId = curr.data.email;
	});
	async function handleLogout() {
		await authHandlers.logout();
		window.location.href = '/';
	}
</script>

<h1>Hi there {username}! This is the page which will load when you login</h1>
<a href="/articles/{userId}">Your articles</a>
<a href="/send">Send a new Article.</a>
<button on:click={handleLogout}>logout</button>
