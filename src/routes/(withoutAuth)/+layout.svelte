<header class="text-slate-50 bg-zinc-950 body-font shadow-2xl">
	<div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
		<a href="/" class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
			<img
				src="https://media.discordapp.net/attachments/1164603841182969906/1218811935567380520/Asset_1.png?ex=66090611&is=65f69111&hm=97f65c6cc51f6704a5f6402c4102226e2c6c9d2eaffa43434f7b3d9ac83fbb11&=&format=webp&quality=lossless"
				style="width:40px;height:40px;"
				alt="logo"
			/>
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
<slot />
<footer class="text-gray-600 body-font">
	<div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
		<a href="#top" class="flex title-font font-medium items-center mb-4 md:mb-0">
			<img
				src="https://media.discordapp.net/attachments/1164603841182969906/1218811935567380520/Asset_1.png?ex=66090611&is=65f69111&hm=97f65c6cc51f6704a5f6402c4102226e2c6c9d2eaffa43434f7b3d9ac83fbb11&=&format=webp&quality=lossless"
				style="width:40px;height:40px;"
				alt="logo"
			/>
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
