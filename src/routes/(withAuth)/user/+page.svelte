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
	<h1 class="text-[350%] leading-normal font-semibold">
		Hi there <span class="font-bold">{username}</span> ! Use the navbar to navigate different pages.
		Hope you will contribute to this novel approach for ad or bonkers free ideal Articles reading experience!
	</h1>
</div>
