<template>
	<!-- container -->
	<div class="bg-gray-200 h-screen flex flex-col items-center justify-center text-gray-700">
		<!-- wrapper -->
		<!-- <div class="flex flex-col w-full"> -->
		<h1 class="text-5xl font-bold self-start tracking-wide my-8">Keycap Sets</h1>

		<div class="flex items-center justify-center gap-x-4 my-8">
			<div class="font-semibold hover:bg-green-400 hover:text-indigo-100  py-1 px-3 rounded-lg">Available Now</div>
		</div>

		<div id="grid" class=" grid grid-cols-1 sm:grid-cols-2 gap-4 px-2">
			<div class="max-w-lg border border-gray-300 rounded-md shadow-md overflow-hidden" style="min-width: 25rem">
				<div class="p-4 bg-gray-100">
					<div class="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
						<img class="object-cover" src="https://i.imgur.com/Bw5cJoC.png" alt="" />
					</div>
					<div class="my-2">
						<div class="flex flex-col">
							<!-- <button class="bg-green-500 font-semibold text-xs py-1 px-3 rounded-full text-indigo-100 opacity-60">Available now</button> -->
							<div class="text-2xl font-semibold leading-snug">
								{{ keycap_set.name }}
							</div>
							<!-- <button class="bg-green-500 font-semibold text-xs py-1 px-3 rounded-full text-indigo-100 opacity-60">Available now</button> -->
						</div>
						<div class="text-sm text-gray-500 mb-1 leading-none">
							Designed by
							<span class="text-gray-600 font-semibold">{{ keycap_set.designer }}</span>
						</div>
						<!-- This can be used to display old dates -->
						<div class="text-sm text-gray-500">{{ keycap_set.starts_at }} - {{ keycap_set.ends_at }}</div>
						<!-- This button can be displayed when the product is available -->
						<button class="bg-green-500 font-semibold text-xs py-1 px-3 rounded-full text-indigo-100 opacity-60">Group Buy Now</button>
					</div>
				</div>
			</div>

			<div class="max-w-lg border border-gray-300 rounded-md shadow-md overflow-hidden">
				<div class="p-4 bg-gray-100">
					<div class="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
						<img class="object-cover" src="https://i.imgur.com/Bw5cJoC.png" alt="" />
					</div>
					<div class="my-3">
						<div class="flex justify-between items-center">
							<div class="text-3xl font-semibold leading-snug">
								{{ keycap_set.name }}
							</div>
							<button class="bg-green-500 font-semibold text-xs py-1 px-3 rounded-full text-indigo-100 opacity-60">Available now</button>
						</div>
						<div class="text-sm text-gray-500 mb-2 leading-none">
							Designed by
							<span class="text-gray-600 font-semibold">{{ keycap_set.designer }}</span>
						</div>
					</div>
				</div>
			</div>
			<div class="max-w-lg border border-gray-300 rounded-md shadow-md overflow-hidden">
				<div class="p-4 bg-gray-100">
					<div class="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
						<img class="object-cover" src="https://i.imgur.com/Bw5cJoC.png" alt="" />
					</div>
					<div class="my-3">
						<div class="flex justify-between items-center">
							<div class="text-3xl font-semibold leading-snug">
								{{ keycap_set.name }}
							</div>
							<button class="bg-green-500 font-semibold text-xs py-1 px-3 rounded-full text-indigo-100 opacity-60">Available now</button>
						</div>
						<div class="text-sm text-gray-500 mb-2 leading-none">
							Designed by
							<span class="text-gray-600 font-semibold">{{ keycap_set.designer }}</span>
						</div>
					</div>
				</div>
			</div>
			<!-- </div> -->
		</div>
	</div>
</template>

<script>
export default {
	name: 'Keycaps',
	computed: {},
	data() {
		return {
			keycap_set: {
				name: 'GMK Red Alert',
				starts_at: 'March 1st, 2021',
				ends_at: 'March 31st, 2021',
				designer: 'i_am_the_designer',
				profile: 'Cherry',
			},
		};
	},
	mounted() {},
	watch: {},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	/* text-align: center; */
}

.custom-height {
	height: calc(100% - 56px);
}

.slide-vertical-enter-active,
.slide-vertical-leave-active {
	transition: transform 0.5s;
}
.slide-vertical-enter, .slide-vertical-leave-to /* .slide-vertical-leave-active below version 2.1.8 */ {
	transform: translateY(-100%);
}
</style>
