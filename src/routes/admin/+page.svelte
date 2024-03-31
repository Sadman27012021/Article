<script>
	import { PUBLIC_DB_KEY } from '$env/static/public';
	import DataAdmin from '../../components/+DataAdmin.svelte';
	//verification
	let form = true;
	let content = false;
	let inputkey = '';
	function handleAuthenticate() {
		if (inputkey == PUBLIC_DB_KEY) {
			form = false;
			content = true;
		} else {
			console.log('False');
		}
		return;
	}
</script>

{#if form}
<section class="text-gray-600 body-font relative">
	<div class="container px-5 py-24 mx-auto">
		<div class="flex flex-col text-center w-full mb-12">
			<h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Send Article</h1>
			<p class="lg:w-1/3 mx-auto leading-relaxed text-base">
				Enter the Admin Pass to login as admin
			</p>
		</div>
		<div class="lg:w-1/2 md:w-1/2 mx-auto">
			<div class="flex flex-wrap -m-2">
				<div class="p-2 w-full">
					<div class="relative">
						<label for="name" class="leading-7 text-sm text-gray-600">Admin Passkey</label>
						<input
							bind:value={inputkey}
							type="text"
							id="name"
							name="name"
							class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
						/>
					</div>
				</div>

				<div class="p-2 w-full">
					<button
						on:click={handleAuthenticate} 
						type="button"
						class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
						>Submit</button
					>
				</div>
			</div>
		</div>
	</div>
</section>
{/if}

{#if content}
	<DataAdmin />
{/if}
