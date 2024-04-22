<script>
	import { authStore } from '../../../store/store';
	let username = '';
	authStore.subscribe((curr) => {
		username = curr.data.username;
	});
	let userId = '';
	authStore.subscribe((curr) => {
		userId = curr.data.email;
	});
</script>

<div class="mx-[15%] my-8">
	<h1 class="text-7xl leading-normal">
		Hi there {username}! This is the page which will load when you login. Use the navbar to navigate
		different pages. Hope you will enjoy using this site!
	</h1>
</div>
