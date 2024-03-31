<script>
	import { db } from '../../../lib/firebase';
	import { doc, setDoc, getDoc } from 'firebase/firestore';
	import { authStore } from '../../../store/store';
	let data = { heading: '', body: '', confirmed: false };
	let error = '';

	async function send() {
		error = 'Please Enter the Details';
		const docRef = doc(db, $authStore.data.email, data.heading);
		const docSnap = await getDoc(docRef);
		if (!docSnap.exists() && data.body && data.heading) {
			const articleRef = doc(db, $authStore.data.email, data.heading);
			await setDoc(articleRef, data);
		}
		window.location.href = '/user';
	}
</script>

<div>
	{#if !data.body || !data.heading}
		{error}
	{/if}
</div>

<section class="text-gray-600 body-font relative">
	<div class="container px-5 py-24 mx-auto">
		<div class="flex flex-col text-center w-full mb-12">
			<h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Send Article</h1>
			<p class="lg:w-1/3 mx-auto leading-relaxed text-base">
				Write the Heading of the article in the Heading section and the body in the Body section.
			</p>
		</div>
		<div class="lg:w-1/2 md:w-1/2 mx-auto">
			<div class="flex flex-wrap -m-2">
				<div class="p-2 w-full">
					<div class="relative">
						<label for="name" class="leading-7 text-sm text-gray-600">Heading</label>
						<input
							bind:value={data.heading}
							type="text"
							id="name"
							name="name"
							class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
						/>
					</div>
				</div>

				<div class="p-2 w-full">
					<div>
						<label for="message" class="leading-9 text-sm text-gray-600">Body</label>
						<textarea
							style="height: 50vh;"
							bind:value={data.body}
							id="message"
							name="message"
							class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none transition-colors duration-200 ease-in-out"
						></textarea>
					</div>
				</div>
				<div class="p-2 w-full">
					<button
						on:click={send}
						type="button"
						class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
						>Submit</button
					>
				</div>
			</div>
		</div>
	</div>
</section>


