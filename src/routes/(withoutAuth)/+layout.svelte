<script>
	import { authStore } from '../../store/store';
	import { authHandlers } from '../../store/store';
	async function handleLogout() {
		await authHandlers.logout();
		window.location.href = '/';
	}
	const user = $authStore.user;
</script>

{#if !user == true}
	<header class="text-slate-50 bg-zinc-950 body-font shadow-2xl">
		<div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
			<a href="/" class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
				<img src="./Asset.png" style="width:40px;height:40px;" alt="logo" />
				<span class="ml-3 text-xl">Scientia</span>
			</a>
			<nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
				<a href="/about-us" class="mr-5 hover:text-white">About Us</a>
				<a href="/articles" class="mr-5 hover:text-white">Articles</a>
			</nav>
			<button
				class="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
				><a href="/auth">Login/Sign Up</a>
				<svg
					fill="none"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					class="w-4 h-4 ml-1"
					viewBox="0 0 24 24"
				>
					<path d="M5 12h14M12 5l7 7-7 7"></path>
				</svg>
			</button>
		</div>
	</header>
{:else}
	<header class="text-slate-50 bg-zinc-950 body-font shadow-2xl">
		<div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
			<a href="/user" class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
				<img src="./Asset.png" style="width:40px;height:40px;" alt="logo" />
				<span class="ml-3 text-xl">Scientia</span>
			</a>
			<nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
				<a href="/myArticles" class="mr-5 hover:text-white">My Articles</a>
				<a href="/send" class="mr-5 hover:text-white">Send Article</a>
				<a href="/about-us" class="mr-5 hover:text-white">About Us</a>
				<a href="/articles" class="mr-5 hover:text-white">Articles</a>
			</nav>
			<button
				on:click={handleLogout}
				class="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
				>Logout
				<svg
					fill="none"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					class="w-4 h-4 ml-1"
					viewBox="0 0 24 24"
				>
					<path d="M5 12h14M12 5l7 7-7 7"></path>
				</svg>
			</button>
		</div>
	</header>
{/if}

<slot />
