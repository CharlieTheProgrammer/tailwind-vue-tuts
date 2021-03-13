<template>
	<div id="app" class="bg-gray-100 h-screen flex flex-col">
		<header class="flex flex-shrink-0">
			<div class="bg-gray-800 flex-shrink-0 w-64 px-4 py-3">
				<button class="flex justify-items-center items-center">
					<img class="rounded-full h-8 w-8 object-cover" src="https://via.placeholder.com/50" alt="" />
					<span class="text-white text-sm font-medium ml-4">Monica White</span>
					<svg class="w-6 h-6 stroke-current text-white ml-10 font-thin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
						<path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
					</svg>
				</button>
			</div>
			<div class="flex-1 bg-gray-600 flex justify-between px-6">
				<div class="flex justify-center items-center">
					<nav class="text-white space-x-3">
						<a class="bg-gray-800 py-1 px-3 rounded-md text-sm font-medium inline-block hover:bg-gray-500" href="#">Mailbox</a>
						<a class="py-1 px-3 rounded-md text-sm font-medium inline-block hover:bg-gray-500" href="#">Customers</a>
						<a class="py-1 px-3 rounded-md text-sm font-medium inline-block hover:bg-gray-500" href="#">Reporting</a>
						<a class="py-1 px-3 rounded-md text-sm font-medium inline-block hover:bg-gray-500" href="#">Manage</a>
					</nav>
				</div>
				<div class="flex items-center space-x-5">
					<span class="relative">
						<span class="absolute inset-y-0 left-0 flex items-center p-2">
							<svg class="h-5 w-5 text-gray-400 stroke-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
							</svg>
						</span>
						<input type="text" placeholder="Search" class="block w-full bg-gray-900 rounded-md text-sm font-medium text-white pl-9 p-2" />
					</span>
					<button>
						<svg class="h-5 w-5 stroke-current text-gray-300 hover:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
							/>
						</svg>
					</button>
					<button>
						<svg class="h-5 w-5 stroke-current text-gray-300 hover:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
					</button>
				</div>
			</div>
		</header>
		<div class="flex-1 flex custom-height">
			<div class="bg-gray-50 w-64 px-4 py-6 flex-shrink-0 overflow-y-auto">
				<nav class="flex flex-col items-start">
					<h2 class="uppercase text-xs font-semibold text-gray-400">Mailboxes</h2>
					<div class="flex flex-col items-start w-full mt-2 gap-y-3">
						<a href="#" class="w-full text-xs font-semibold text-gray-600 bg-gray-100 rounded-xl -mx-2 py-1 px-3 flex items-center justify-between">
							<div class="flex items-center">
								<span class="inline-block">
									<svg class="h-6 w-6 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
										/>
									</svg>
								</span>
								<div class="ml-2 font-bold">Inbox</div>
							</div>
							<div class="bg-gray-200 rounded-full px-3 py-0.5">6</div>
						</a>
						<a href="#" class="w-full text-xs font-semibold text-gray-400 hover:bg-gray-100 rounded-xl -mx-2 py-1 px-3 flex items-center justify-between">
							<div class="flex items-center">
								<span class="inline-block">
									<svg class="h-6 w-6 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
									</svg>
								</span>
								<div class="ml-2 font-bold">Flagged</div>
							</div>
							<!-- <div class="bg-gray-200 rounded-full px-3 py-1">6</div> -->
						</a>
						<a href="#" class="w-full text-xs font-semibold text-gray-400 hover:bg-gray-100 rounded-xl -mx-2 py-1 px-3 flex items-center justify-between">
							<div class="flex items-center">
								<span class="inline-block">
									<svg class="h-6 w-6 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
										/>
									</svg>
								</span>
								<div class="ml-2 font-bold">Drafts</div>
							</div>
							<div class="bg-gray-200 rounded-full px-3 py-0.5">2</div>
						</a>
						<a href="#" class="w-full text-xs font-semibold text-gray-400 hover:bg-gray-100 rounded-xl -mx-2 py-1 px-3 flex items-center justify-between">
							<div class="flex items-center">
								<span class="inline-block">
									<svg class="h-6 w-6 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
										/>
									</svg>
								</span>
								<div class="ml-2 font-bold">Assigned</div>
							</div>
							<div class="bg-gray-200 rounded-full px-3 py-0.5">1</div>
						</a>
						<a href="#" class="w-full text-xs font-semibold text-gray-400 hover:bg-gray-100 rounded-xl -mx-2 py-1 px-3 flex items-center justify-between">
							<div class="flex items-center">
								<span class="inline-block">
									<svg class="h-6 w-6 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>
								</span>
								<div class="ml-2 font-bold">Closed</div>
							</div>
							<!-- <div class="bg-gray-200 rounded-full px-3 py-0.5">6</div> -->
						</a>
						<a href="#" class="w-full text-xs font-semibold text-gray-400 hover:bg-gray-100 rounded-xl -mx-2 py-1 px-3 flex items-center justify-between">
							<div class="flex items-center">
								<span class="inline-block">
									<svg class="h-6 w-6 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
									</svg>
								</span>
								<div class="ml-2 font-bold">Junk</div>
							</div>
							<!-- <div class="bg-gray-200 rounded-full px-3 py-0.5">6</div> -->
						</a>
					</div>
				</nav>

				<nav class="flex flex-col items-start mt-10">
					<h2 class="uppercase text-xs text-gray-400 font-semibold">Folders</h2>
					<div class="flex flex-col items-start w-full mt-3 gap-y-4">
						<a href="#" class="text-gray-500 text-xs font-semibold hover:text-gray-400">Refunds</a>
						<a href="#" class="text-gray-500 text-xs font-semibold hover:text-gray-400">Discounts</a>
						<a href="#" class="text-gray-500 text-xs font-semibold hover:text-gray-400">Bugs</a>
					</div>
				</nav>
			</div>

			<main class="flex flex-1 w-full border-l">
				<div class="flex flex-col flex-shrink-0 border-r">
					<div class="flex items-center justify-between p-2 text-xs text-gray-400 font-semibold">
						<div class="flex items-center">
							Sort by Date
							<span>
								<svg class="w-4 h-4 stroke-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
									<path
										fill-rule="evenodd"
										d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
										clip-rule="evenodd"
									/>
								</svg>
							</span>
						</div>
						<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
						</svg>
					</div>
					<!-- Cards go here -->
					<div class="flex-grow flex flex-col overflow-y-auto divide-y divide-gray-100">
						<div class="w-72 bg-blue-50 flex flex-col text-left p-4 gap-y-1 border-l-4 border-blue-400 rounded">
							<div class="flex justify-between items-center">
								<div class="text-sm text-gray-800 font-semibold">Joe Armstrong</div>
								<div class="text-gray-400 text-xs">1 day ago</div>
							</div>
							<div class="text-sm font-semibold text-gray-500">Re: Student Discount?</div>
							<p class="text-sm text-gray-400 w-full">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
						</div>
						<div class="w-72 bg-white flex flex-col text-left p-4 gap-y-1">
							<div class="flex justify-between items-center">
								<div class="text-sm text-gray-800 font-semibold">Joe Armstrong</div>
								<div class="text-gray-400 text-xs">1 day ago</div>
							</div>
							<div class="text-sm font-semibold text-gray-500">Re: Student Discount?</div>
							<p class="text-sm text-gray-400 w-full">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
						</div>
						<div class="w-72 bg-white flex flex-col text-left p-4 gap-y-1">
							<div class="flex justify-between items-center">
								<div class="text-sm text-gray-800 font-semibold">Joe Armstrong</div>
								<div class="text-gray-400 text-xs">1 day ago</div>
							</div>
							<div class="text-sm font-semibold text-gray-500">Re: Student Discount?</div>
							<p class="text-sm text-gray-400 w-full">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
						</div>
						<div class="w-72 bg-white flex flex-col text-left p-4 gap-y-1">
							<div class="flex justify-between items-center">
								<div class="text-sm text-gray-800 font-semibold">Joe Armstrong</div>
								<div class="text-gray-400 text-xs">1 day ago</div>
							</div>
							<div class="text-sm font-semibold text-gray-500">Re: Student Discount?</div>
							<p class="text-sm text-gray-400 w-full">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
						</div>
						<div class="w-72 bg-white flex flex-col text-left p-4 gap-y-1">
							<div class="flex justify-between items-center">
								<div class="text-sm text-gray-800 font-semibold">Joe Armstrong</div>
								<div class="text-gray-400 text-xs">1 day ago</div>
							</div>
							<div class="text-sm font-semibold text-gray-500">Re: Student Discount?</div>
							<p class="text-sm text-gray-400 w-full">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
						</div>
						<div class="w-72 bg-white flex flex-col text-left p-4 gap-y-1">
							<div class="flex justify-between items-center">
								<div class="text-sm text-gray-800 font-semibold">Joe Armstrong</div>
								<div class="text-gray-400 text-xs">1 day ago</div>
							</div>
							<div class="text-sm font-semibold text-gray-500">Re: Student Discount?</div>
							<p class="text-sm text-gray-400 w-full">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
						</div>
						<div class="w-72 bg-white flex flex-col text-left p-4 gap-y-1">
							<div class="flex justify-between items-center">
								<div class="text-sm text-gray-800 font-semibold">Joe Armstrong</div>
								<div class="text-gray-400 text-xs">1 day ago</div>
							</div>
							<div class="text-sm font-semibold text-gray-500">Re: Student Discount?</div>
							<p class="text-sm text-gray-400 w-full">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
						</div>
						<div class="w-72 bg-white flex flex-col text-left p-4 gap-y-1">
							<div class="flex justify-between items-center">
								<div class="text-sm text-gray-800 font-semibold">Joe Armstrong</div>
								<div class="text-gray-400 text-xs">1 day ago</div>
							</div>
							<div class="text-sm font-semibold text-gray-500">Re: Student Discount?</div>
							<p class="text-sm text-gray-400 w-full">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
						</div>
						<!-- <div class="w-72 bg-white flex flex-col text-left p-4 gap-y-1">
							<div class="flex justify-between items-center">
								<div class="text-sm text-gray-800 font-semibold">Joe Armstrong</div>
								<div class="text-gray-400 text-xs">1 day ago</div>
							</div>
							<div class="text-sm font-semibold text-gray-500">Re: Student Discount?</div>
							<p class="text-sm text-gray-400 w-full">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
						</div>
						<div class="w-72 bg-white flex flex-col text-left p-4 gap-y-1">
							<div class="flex justify-between items-center">
								<div class="text-sm text-gray-800 font-semibold">Joe Armstrong</div>
								<div class="text-gray-400 text-xs">1 day ago</div>
							</div>
							<div class="text-sm font-semibold text-gray-500">Re: Student Discount?</div>
							<p class="text-sm text-gray-400 w-full">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
						</div> -->
					</div>
				</div>
				<div class="flex-1 divide-y">
					<!-- Header -->
					<div class="shadow-md divide-y">
						<div class="flex items-center justify-between text-gray-500 p-6">
							<div class="flex gap-x-5">
								<button>
									<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
									</svg>
								</button>
								<button>
									<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
										/>
									</svg>
								</button>
								<button>
									<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
										/>
									</svg>
								</button>
								<button>
									<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
										/>
									</svg>
								</button>
								<button>
									<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
										/>
									</svg>
								</button>
							</div>
							<div class="flex gap-x-5">
								<button>
									<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
									</svg>
								</button>
								<button>
									<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
									</svg>
								</button>
							</div>
						</div>
						<div class="bg-white flex items-center justify-between p-6 text-gray-600">
							<h2 class="text-2xl">
								Re: Student Discount?
							</h2>
							<div class="flex items-center gap-x-4">
								<div class="font-semibold ">#1234</div>
								<button class="rounded-full bg-green-300 px-3 py-1 text-sm font-semibold leading-none">
									Active
								</button>
							</div>
						</div>
					</div>

					<!-- cards -->
          <div>
            <div class="bg-white text-gray-500 p-6 m-4 rounded-md space-y-5 shadow-sm">
              <div class="flex items-center justify-between">
                <div class="font-semibold text-gray-400"><span class="text-gray-800">Joe Armstrong</span> wrote</div>
                <div class="flex items-center gap-x-2">
                  <div class="text-xs font-semibold text-gray-400">
                    Yesterday at 7:24 AM
                  </div>
                  <img class="rounded-full h-8 w-8 object-cover" src="https://via.placeholder.com/50" alt="" />
                </div>
              </div>
              <p class="text-left">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt incidunt fugiat voluptates atque nisi quidem odit sit ipsa? Voluptatum error quam optio praesentium, placeat eius nobis expedita numquam magnam autem.</p>
            </div>
            <div class="bg-white text-gray-500 p-6 m-4 rounded-md space-y-5 shadow-sm">
              <div class="flex items-center justify-between">
                <div class="font-semibold text-gray-400"><span class="text-gray-800">Joe Armstrong</span> wrote</div>
                <div class="flex items-center gap-x-2">
                  <div class="text-xs font-semibold text-gray-400">
                    Yesterday at 7:24 AM
                  </div>
                  <img class="rounded-full h-8 w-8 object-cover" src="https://via.placeholder.com/50" alt="" />
                </div>
              </div>
              <p class="text-left">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt incidunt fugiat voluptates atque nisi quidem odit sit ipsa? Voluptatum error quam optio praesentium, placeat eius nobis expedita numquam magnam autem.</p>
            </div>
            <div class="bg-white text-gray-500 p-6 m-4 rounded-md space-y-5 shadow-sm">
              <div class="flex items-center justify-between">
                <div class="font-semibold text-gray-400"><span class="text-gray-800">Joe Armstrong</span> wrote</div>
                <div class="flex items-center gap-x-2">
                  <div class="text-xs font-semibold text-gray-400">
                    Yesterday at 7:24 AM
                  </div>
                  <img class="rounded-full h-8 w-8 object-cover" src="https://via.placeholder.com/50" alt="" />
                </div>
              </div>
              <p class="text-left">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt incidunt fugiat voluptates atque nisi quidem odit sit ipsa? Voluptatum error quam optio praesentium, placeat eius nobis expedita numquam magnam autem.</p>
            </div>

          </div>
				</div>
			</main>
		</div>
	</div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import LandingPage from './components/LandingPage.vue'

export default {
	name: 'App',
	components: {
		// HelloWorld,
		// LandingPage
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
}

.custom-height {
	height: calc(100% - 56px);
}
</style>
