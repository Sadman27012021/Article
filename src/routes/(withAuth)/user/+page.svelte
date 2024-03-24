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

<h1>Hi there {username}! This is the page which will load when you login</h1>
<section class="text-gray-600 body-font">
	<div class="container px-9 py-19 pt-3 mx-auto">
		<div class="flex flex-wrap -m-4">
			<div class="p-4 md:w-1/3">
				<div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
					<img
						class="lg:h-48 md:h-36 w-full object-cover object-center"
						src="https://dummyimage.com/720x400"
						alt="blog"
					/>
					<div class="p-6">
						<h1 class="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
					</div>
				</div>
			</div>
			<div class="p-4 md:w-1/3">
				<div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
					<img
						class="lg:h-48 md:h-36 w-full object-cover object-center"
						src="https://dummyimage.com/721x401"
						alt="blog"
					/>
					<div class="p-6">
						<h1 class="title-font text-lg font-medium text-gray-900 mb-3">The 400 Blows</h1>
					</div>
				</div>
			</div>
			<div class="p-4 md:w-1/3">
				<div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
					<img
						class="lg:h-48 md:h-36 w-full object-cover object-center"
						src="https://dummyimage.com/722x402"
						alt="blog"
					/>
					<div class="p-6">
						<h1 class="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
