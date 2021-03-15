<template>
	<div class="bg-gray-100 h-screen flex flex-wrap">
		<!-- <div class="bg-blue-100 w-screen h-56">menu</div> -->

		<!-- <div class="h-full w-full flex flex-row"> -->
		<div class="w-14">hello</div>
		<div class="bg-gray-100 flex-1 flex flex-col">
			<!-- Having some difficulty adding the small border on the right -->
			<!-- <div class="border-l-4 -my-2 border-red-700"></div> -->
			<nav class="flex items-center justify-between px-4 py-2">
				<div class="flex items-center">
					<div class="text-sm font-semibold text-gray-600 px-3 py-1 hover:bg-gray-200 rounded">
						Portal
					</div>
					<div>
						<button class="relative px-1 py-1.5 hover:bg-gray-200 rounded focus:outline-none" @click="showDropdown1 = !showDropdown1">
							<svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
								<path
									fill-rule="evenodd"
									d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
									clip-rule="evenodd"
								/>
							</svg>
						</button>
						<div class="bg-gray-700 opacity-10 absolute inset-0" @click="showDropdown1 = !showDropdown1" v-if="showDropdown1"></div>
						<!-- Dropdown -->
						<div class="absolute flex flex-col bg-gray-50 border rounded overflow-hidden shadow-sm text-sm text-gray-500 space-y-1" v-if="showDropdown1">
							<button class="hover:bg-gray-200 py-1 px-3 focus:outline-none">
								<div class="flex items-center">
									<svg class="h-5 w-5 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
										/>
									</svg>
									View Version History
								</div>
							</button>

							<button class="hover:bg-gray-200 py-1 px-3 focus:outline-none">
								<div class="flex items-center">
									<svg class="h-5 w-5 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
										/>
									</svg>
									Duplicate
								</div>
							</button>

							<button class="hover:bg-gray-200 py-1 px-3 focus:outline-none">
								<div class="flex items-center">
									<svg class="h-5 w-5 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
										/>
									</svg>
									Move To
								</div>
							</button>

							<button class="hover:bg-gray-200 py-1 px-3 focus:outline-none">
								<div class="flex items-center">
									<svg class="h-5 w-5 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
										/>
									</svg>
									Copy Link
								</div>
							</button>

							<button class="hover:bg-gray-200 py-1 px-3 focus:outline-none">
								<div class="flex items-center">
									<svg class="h-5 w-5 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
										/>
									</svg>
									Project Settings
								</div>
							</button>

							<button class="hover:bg-gray-200 py-1 px-3 focus:outline-none">
								<div class="flex items-center">
									<svg class="h-5 w-5 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
										/>
									</svg>
									Transcription Glossary...
								</div>
							</button>

							<div class="border-t border-gray-200 -mx-3"></div>

							<button class="hover:bg-red-100 py-1 px-3">
								<div class="flex items-center text-red-400">
									<svg class="h-5 w-5 mr-2 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
										/>
									</svg>
									Delete
								</div>
							</button>
						</div>
					</div>
				</div>
				<div class="flex items-center justify-center">
					<div class="bg-gray-100 flex items-center rounded-full border border-gray-300 px-5 py-1">
						<!-- Buttons -->
						<div class="flex items-center gap-x-2">
							<button class="text-gray-600 hover:bg-gray-200 rounded p-1">
								<svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z"
									/>
								</svg>
							</button>
							<button class="text-gray-600 hover:bg-gray-200 rounded p-1">
								<svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
									/>
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
							</button>
							<button class="text-gray-600 hover:bg-gray-200 rounded p-1">
								<svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z"
									/>
								</svg>
							</button>
							<button class="text-gray-600 hover:bg-gray-200 rounded p-1">
								<svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
									/>
								</svg>
							</button>
							<button class="text-gray-600 hover:bg-gray-200 rounded p-1">
								<svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
									/>
								</svg>
							</button>
						</div>
						<!-- Timer -->
						<span class="mb-1 mx-4 inline-block text-gray-300 font-semibold text-4xl">0:00:00<span class=" text-xl text-gray-600">.00</span></span>
					</div>
					<div class="mx-4">
						<button class="hover:bg-gray-200 rounded p-1">
							<svg class="h-8 w-8 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
								/>
							</svg>
						</button>
					</div>
				</div>
				<div class="flex">
					<div class="flex items-center">
						<button class="flex items-center mr-2 text-sm text-gray-400 hover:bg-gray-200 rounded px-3 py-1 leading-none">
							<svg class="h-5 w-5 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
								/>
							</svg>
							Share
						</button>
					</div>
					<div class="border-r -my-2 border-gray-300"></div>
					<div class="flex items-center">
						<button class="flex items-center mx-2 hover:bg-gray-200 text-gray-400 rounded px-1 py-1">
							<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
							<svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
								<path
									fill-rule="evenodd"
									d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
									clip-rule="evenodd"
								/>
							</svg>
						</button>
					</div>
				</div>
			</nav>

			<main class="bg-white flex-1 rounded-lg overflow-hidden shadow-md -mx-5 p-4">
				hello
			</main>

		</div>

<!-- There a zindex issue here -->
		<div class="bg-transparent w-14">
			left menu
		</div>
		<!-- </div> -->
	</div>
</template>

<script>
export default {
	name: 'App',
	computed: {},
	data() {
		return {
			showDropdown1: false,
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

.slide-horizontal-enter-active,
.slide-horizontal-leave-active {
	transition: transform 0.5s;
}
.slide-horizontal-enter, .slide-horizontal-leave-to /* .slide-horizontal-leave-active below version 2.1.8 */ {
	transform: translateX(-100%);
}

.slide-vertical-enter-active,
.slide-vertical-leave-active {
	transition: transform 0.5s;
}
.slide-vertical-enter, .slide-vertical-leave-to /* .slide-vertical-leave-active below version 2.1.8 */ {
	transform: translateY(-100%);
}
</style>
