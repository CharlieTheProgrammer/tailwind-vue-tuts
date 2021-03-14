<template>
	<div class="bg-gray-100 h-screen flex flex-col">

	</div>
</template>

<script>
export default {
	name: 'App',
	computed: {},
	data() {
		return {
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
