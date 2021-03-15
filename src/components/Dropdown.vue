<template>
	<div class="bg-gray-200 h-screen flex items-center justify-center" v-on:keyup.esc="isOpen = false">
		<div class="relative">
			<button class="relative z-10 border-2 rounded-full focus:outline-none focus:border-white border-gray-400" @click="isOpen = !isOpen">
				<img class="rounded-full h-8 w-8 object-cover" src="https://via.placeholder.com/50" alt="" />
			</button>

			<div v-if="isOpen" class="fixed top-0 right-0 h-full w-full bg-black opacity-20" @click="isOpen = !isOpen" tabindex="-1"></div>
			<div class="absolute overflow-hidden">
				<transition name="slide-vertical">
					<nav class=" whitespace-nowrap bg-white rounded-lg overflow-hidden text-gray-700 mt-2" v-show="isOpen">
						<a href="#" class="block px-4 pt-2 pb-1  hover:bg-indigo-700 hover:text-white">Account Settings</a>
						<a href="#" class="block px-4 py-1 hover:bg-indigo-700 hover:text-white">Support</a>
						<a href="#" class="block px-4 pt-1 pb-2 hover:bg-indigo-700 hover:text-white">Sign Out</a>
					</nav>
				</transition>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Dropdown',
	computed: {},
	data() {
		return {
			isOpen: false,
		};
	},
	mounted() {

	},
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
