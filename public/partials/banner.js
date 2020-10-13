var template = `
    <nav id="header" class="bg-gray-900 fixed w-full z-10 top-0 shadow">


		<div class="w-full container mx-auto flex flex-wrap items-center mt-0 pt-3 pb-3 md:pb-0">

			<div class="w-1/2 pl-2 md:pl-0">
				<a class="text-gray-100 text-base xl:text-xl no-underline hover:no-underline font-bold" href="https://github.com/Mynor2397" target="_blank">
					<i class="fas fa-laptop-code text-blue-400 pr-3"></i> Mynor Castrillo
				</a>
			</div>
			<div class="w-1/2 pr-0">
				<div class="flex relative inline-block float-right">

					<div class="relative text-sm text-gray-100">
						<div id="userMenu"
							class="bg-gray-900 rounded shadow-md mt-2 absolute mt-12 top-0 right-0 min-w-full overflow-auto z-30 invisible">
							<ul class="list-reset">
								<li><a href="#"
										class="px-4 py-2 block text-gray-100 hover:bg-gray-800 no-underline hover:no-underline">My
										cuenta</a></li>
								<li><a href="#"
										class="px-4 py-2 block text-gray-100 hover:bg-gray-800 no-underline hover:no-underline">Notificaciones</a>
								</li>
								<li>
									<hr class="border-t mx-2 border-gray-400">
								</li>
								<li><a href="#"
										class="px-4 py-2 block text-gray-100 hover:bg-gray-800 no-underline hover:no-underline">Cerrar
										sesión</a></li>
							</ul>
						</div>
					</div>


					<div class="block lg:hidden pr-4">
						<button id="nav-toggle"
							class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-100 hover:border-teal-500 appearance-none focus:outline-none">
							<svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
								<title>Menu</title>
								<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
							</svg>
						</button>
					</div>
				</div>

			</div>


			<div class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-gray-900 z-20"
				id="nav-content">
				<ul class="list-reset lg:flex flex-1 items-center px-4 md:px-0">
					<li class="mr-6 my-2 md:my-0" onclick="projectsGo()">
						<a
							class="block py-1 md:py-3 pl-1 align-middle text-gray-500 no-underline hover:text-gray-100 border-b-2 border-gray-900  hover:border-blue-400">
							<i class="fab fa-gofore fa-fw mr-3"></i><span class="pb-1 md:pb-0 text-sm">Go</span>
						</a>
					</li>
					<li class="mr-6 my-2 md:my-0"  onclick="projectsJS()">
						<a
							class="block py-1 md:py-3 pl-1 align-middle text-gray-500 no-underline hover:text-gray-100 border-b-2 border-gray-900  hover:border-pink-400">
							<i class="fab fa-node-js fa-fw mr-3"></i><span class="pb-1 md:pb-0 text-sm">JavaScript</span>
						</a>
					</li>

				</ul>

			</div>

		</div>
	</nav>
`

var banner = document.getElementById('banner');
banner.innerHTML = template;



