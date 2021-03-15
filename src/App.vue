<template>
	<div>
		<div id="app" class="">
			<div
				class="flex flex-col mx-auto gap-y-8 max-w-3xl bg-gray-50 overflow-hidden rounded border border-gray-100 shadow-xl m-8 p-6 text-gray-600"
				v-if="$router.currentRoute.path === '/'"
			>
				<div class="space-y-3">
					<h1 class="text-4xl text-center">Welcome to my Tailwind Mini-Projects</h1>
					<p class="text-gray-500">
						I recently decided I've had enough of my lack of UI/CSS skills, so I dedicated some time to creating a few things and have learned quite a bit. I mainly focused on
						layouts, effects, and responsiveness. I haven't progressed to adding color yet.
					</p>
				</div>

				<section>
					<h2 class="text-3xl">Inbox</h2>
					<p class="text-gray-500">
						This project was mostly a walkthrough of Adam Watham's <a href="https://www.youtube.com/watch?v=6xgMkGMIudE" class="text-blue-800" target="_blank">Youtube</a> video.
					</p>
					<p class="text-gray-500">
						One thing I did myself was make the site responsive; as that was not covered in his video. I also learned how to apply transitions to move certain things out of the way
					</p>
					<p class="text-gray-500">Another video I found useful to me when building this is <a href="https://www.youtube.com/watch?v=4hLA4JjM5Rg" class="text-blue-800" target="_blank">here</a>.</p>
				</section>

				<section>
					<h2 class="text-3xl">Dropdown</h2>
					<p class="text-gray-500">
						A seemingly simple item, but nonetheless, something that had managed to elude me for quite some time. I finally learned how to use relative, absolute, and overflow to
						make a nice dropdown with slide effects.
					</p>
				</section>

				<section>
					<h2 class="text-3xl">Descript</h2>
					<p class="text-gray-500">
						A clone of one of the pages on the Descript app. This one I copied on my own. Note that the app is only responsive down to about 700px, just like their desktop app.
					</p>
				</section>
			</div>
			<div id="nav" class="flex flex-col bg-red-100 opacity-70 absolute mx-auto inset-x-0 bottom-10 text-center">
				Mini-Projects
				<div>
					<router-link to="/">Home</router-link> | <router-link to="/inbox">Inbox</router-link> | <router-link to="/descript">Descript</router-link> |
					<router-link to="/Dropdown">Dropdown</router-link>
				</div>
			</div>
		</div>
		<router-view />
	</div>
</template>

<script>
export default {
	name: 'App',
};
</script>

<style lang="postcss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	/* text-align: center; */
	color: #2c3e50;
}

#nav {
	padding: 30px;
}

#nav a {
	font-weight: bold;
	color: #2c3e50;
}

#nav a.router-link-exact-active {
	color: rgb(67, 56, 202);
}
</style>
