<script>
	import { db } from '../../../lib/firebase';
	import { doc, setDoc, getDoc } from 'firebase/firestore';
	import { page } from '$app/stores';
	import { PUBLIC_DB_KEY } from '$env/static/public';
	let form = true;
	let content = false;
	let inputkey = '';
	let heading = '';
	let body = '';
	const article = $page.params.article;
	const parts = article.split(',');
	let docRef = doc(db, parts[0], parts[1]);
	function handleAuthenticate() {
		console.log(inputkey);
		if (inputkey == PUBLIC_DB_KEY) {
			form = false;
			content = true;
		} else {
			console.log('False');
		}
		return;
	}
	async function fetchData() {
		await getDoc(docRef).then((docSnapshot) => {
			heading = docSnapshot.data().heading;
			body = docSnapshot.data().body;
		});
	}
	fetchData();
	async function send() {
		docRef = doc(db, parts[0], heading);
		await setDoc(docRef, { heading: heading, body: body, confirmed: true });
		window.location.href = '/admin';
	}
</script>

{#if form}
	<form>
		<label>
			<input bind:value={inputkey} type="text" placeholder="Key" />
			<button on:click={handleAuthenticate} type="button" class="submitBtn">Submit </button>
		</label>
	</form>
{/if}

{#if content}
<section class="text-gray-600 body-font relative">
	<div class="container px-5 py-24 mx-auto">
		<div class="flex flex-col text-center w-full mb-12">
			<h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Send Article</h1>
			<p class="lg:w-1/3 mx-auto leading-relaxed text-base">
				Edit the heading or the body and send the article to make this article public. If you don't feel it right, just go back of this page. Reject functionality is in process.
			</p>
		</div>
		<div class="lg:w-1/2 md:w-1/2 mx-auto">
			<div class="flex flex-wrap -m-2">
				<div class="p-2 w-full">
					<div class="relative">
						<label for="name" class="leading-7 text-sm text-gray-600">Heading</label>
						<input
							bind:value={heading}
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
							bind:value={body}
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
{/if}


