<template>
	<div class="bg-gray-100 h-screen flex flex-wrap" style="min-width: 735px">
		<!-- <div class="bg-blue-100 w-screen h-56">menu</div> -->

		<!-- <div class="h-full w-full flex flex-row"> -->
		<div class="w-14 flex flex-row items-start justify-center px-2 pt-5">
			<div class="flex flex-col gap-y-1">
				<button class="hover:bg-gray-200 rounded p-1 mb-5">
					<svg class="h-6 w-6 text-blue-500 stroke-current fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
						<title>Dash icon</title>
						<path
							d="M3.21 9.967C.922 9.967.595 11.457.38 12.36.093 13.538 0 14.02 0 14.02h8.947c2.29 0 2.617-1.492 2.832-2.394.285-1.178.379-1.66.379-1.66zM15.72 2.26H6.982L6.26 6.307l7.884.01c3.885 0 5.03 1.41 4.997 3.748-.019 1.196-.537 3.225-.762 3.884-.598 1.753-1.827 3.749-6.435 3.744l-7.666-.004-.725 4.052h8.718c3.075 0 4.38-.36 5.767-.995 3.071-1.426 4.9-4.455 5.633-8.41C24.76 6.448 23.403 2.26 15.72 2.26z"
						></path>
					</svg>
				</button>
				<button class="hover:bg-gray-200 rounded p-1">
					<svg class="h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
					</svg>
				</button>
				<div class="border-t border-gray-200 -mx-3"></div>
				<button class="hover:bg-gray-200 rounded p-1">
					<svg class="h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
					</svg>
				</button>
				<button class="hover:bg-gray-200 rounded p-1">
					<svg class="h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
						/>
					</svg>
				</button>
				<button class="hover:bg-gray-200 rounded p-1">
					<svg class="h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
						/>
					</svg>
				</button>
			</div>
		</div>
		<div class="bg-gray-100 flex-1 flex flex-col">
			<!-- Having some difficulty adding the small border on the right -->
			<nav class="flex items-center justify-between px-2.5 py-2">
				<!-- self-stretch will prevent empty div from collapsing due to flex items-center  -->
				<div class="flex items-center">
					<div class="border-r -my-1 self-stretch border-gray-300 mr-2"></div>
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
				<!-- Playbar -->
				<div class="flex items-center justify-center">
					<div class="bg-gray-100 flex items-center rounded-full border border-gray-300 px-5 py-1">
						<!-- Buttons -->
						<div class="flex items-center gap-x-2">
							<div class="hidden lg:block">
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
							</div>
							<div class="hidden lg:block">
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
							<div class="hidden lg:block">
								Share
							</div>
						</button>
					</div>
					<div class="border-r -my-1 border-gray-300"></div>
					<div class="flex items-center">
						<button class="flex items-center ml-2 hover:bg-gray-200 text-gray-400 rounded px-1 py-1">
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

			<main class="bg-white flex-1 flex flex-col items-center  justify-start rounded-lg overflow-hidden border shadow-md -mx-0.5 pt-4 xl:p-4">
				<!-- Instrument Cluster -->
				<div class="flex w-full justify-between items-center">
					<div></div>
					<div class="flex justify-center gap-x-1">
						<div class="flex items-center">
							<button class="flex items-center hover:bg-gray-100 text-gray-600 rounded">
								<svg class="h-7 w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
									<path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
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
						<div class="border-r border-gray-200"></div>
						<div class="flex items-center">
							<button class="flex items-center hover:bg-gray-100 text-gray-600 rounded px-1 py-1">
								<svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
									/>
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
						<div class="border-r border-gray-200"></div>

						<!-- Middle cluster -->
						<div class="flex gap-x-1">
							<div class="flex items-center">
								<button class="flex items-center hover:bg-gray-100 text-gray-400 rounded px-1 py-1">
									<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
										/>
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
							<div class="flex items-center">
								<button class="flex items-center hover:bg-gray-100 text-gray-400 rounded px-1 py-1">
									<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
										/>
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
							<div class="flex items-center">
								<button class="flex items-center hover:bg-gray-100 text-gray-400 rounded px-1 py-1">
									<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
										/>
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
							<div class="flex items-center">
								<button class="flex items-center hover:bg-gray-100 text-gray-400 rounded px-1 py-1">
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

						<div class="border-r border-gray-200"></div>
						<div class="flex items-center">
							<button class="flex items-center hover:bg-gray-100 text-gray-400 rounded px-1 py-1">
								<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
									/>
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
						<div class="border-r border-gray-200"></div>
						<div class="flex items-center">
							<button class="flex items-center hover:bg-gray-100 text-gray-400 rounded px-1 py-1">
								<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
									/>
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
					<div class="text-right">
						<button class="text-sm text-gray-600 font-semibold hover:bg-gray-100 rounded py-1 px-3 mr-2">
							Publish
						</button>
					</div>
				</div>

				<!-- Content -->
				<div class="flex flex-wrap justify-center w-full overflow-hidden pt-16 xl:p-16 max-w-6xl">
					<!-- <header class="flex flex-wrap overflow-hidden"> -->
					<div class="w-1/6 overflow-hidden ">
						<!-- Filler -->
					</div>

					<div class="w-5/6 lg:w-4/6 overflow-hidden text-2xl py-8 pl-1 pr-10 lg:pr-0">
						<!-- Column Content -->
						The Portal - 12 - Vitalik Buterin - The Ethereal Prince and His Virtual Machine-Cut
					</div>
					<div class="hidden lg:block w-1/6 overflow-hidden ">
						<!-- Filler -->
					</div>
					<!-- </header> -->

					<div class="w-1/6 overflow-hidden text-center flex justify-end items-start mb-6">
						<button class="flex items-center justify-center gap-x-1 hover:bg-gray-200 text-transparent hover:text-gray-400 rounded px-1 py-1 mr-2">
							<svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
							<div class="text-indigo-500 text-sm font-semibold">
								Eric Weinstein
							</div>
							<svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
							</svg>
						</button>
					</div>

					<div class="w-5/6 lg:w-4/6 overflow-hidden leading-8 tracking-wide mb-6 flex flex-wrap pr-10 lg:pr-0">
						<div class=" hover:bg-gray-100 rounded pl-1" v-for="(word, index) in phraseToArray(ericFirstLine)" :key="index">
							{{ word }}
						</div>
					</div>
					<div class="hidden lg:block w-1/6 overflow-hidden ">
						<!-- Filler -->
					</div>

					<div class="w-1/6 overflow-hidden text-center flex justify-end items-start mb-6">
						<button class="flex items-center justify-center gap-x-1 hover:bg-gray-200 text-transparent hover:text-gray-400 rounded px-1 py-1 mr-2">
							<svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
							<div class="text-pink-500 text-sm font-semibold">
								Vitalik Buterin
							</div>
							<svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
							</svg>
						</button>
					</div>

					<div class="w-5/6 lg:w-4/6 overflow-hidden leading-8 tracking-wide mb-6 flex flex-wrap pr-10 lg:pr-0">
						<div class=" hover:bg-gray-100 rounded pl-1" v-for="(word, index) in phraseToArray(vitalikFirstLine)" :key="index">
							{{ word }}
						</div>
					</div>
					<div class="hidden lg:block w-1/6 overflow-hidden ">
						<!-- Filler -->
					</div>
				</div>
			</main>
		</div>

		<!-- There a zindex issue here -->
		<div class="bg-transparent w-14 flex flex-row items-start justify-center px-2 pt-5">
			<div class="flex flex-col gap-y-1">
				<button class="bg-gray-800 text-white font-bold rounded-full p-1 mb-5">
					CO
				</button>
				<button class="hover:bg-gray-200 rounded p-1">
					<svg class="h-6 w-6 text-gray-400 transform rotate-90" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
						/>
					</svg>
				</button>
				<div class="border-t border-gray-200 -mx-3"></div>
				<button class="hover:bg-gray-200 rounded p-1">
					<svg class="h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
					</svg>
				</button>
			</div>
		</div>
		<!-- </div> -->
	</div>
</template>

<script>
export default {
	name: 'Descript',
	computed: {},
	data() {
		return {
			showDropdown1: false,
			ericFirstLine: `Hello, you found the portal. I'm your host, Eric Weinstein. And I'm sitting here today with metallic Buter and the leader and a founder of the Ethereum world of cryptocurrencies and smart contracts. Welcome to the portal.`,
			vitalikFirstLine: `Thank you. It's good to be here, Eric.`,
		};
	},
	methods: {
		phraseToArray(phrase) {
			return phrase.split(' ');
		},
	},
	mounted() {	},
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
