<template>
  <nav class="bg-blue-400">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <div class="-ml-2 mr-2 flex items-center md:hidden">
            <!-- Mobile menu button -->
            <button class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out" aria-label="Main menu" aria-expanded="false">
              <!-- Icon when menu is closed. -->
              <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
              <!-- Icon when menu is open. -->
              <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
          <div class="hidden md:ml-6 md:flex md:items-center">
            <a href="/" class="px-3 py-2 rounded-md text-sm font-medium leading-5 text-white focus:outline-none focus:text-white hover:bg-indigo-600 hover:text-white transition duration-150 ease-in-out">Home
            </a>
            <a href="#" class="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-white hover:text-white focus:outline-none hover:bg-indigo-600 focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">About
            </a>
            <a href="#" class="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-white hover:text-white hover:bg-indigo-600 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Projects
            </a>
            <a href="#" class="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-white hover:text-white hover:bg-indigo-600 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Services
            </a>
          </div>
        </div>
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <span class="rounded-md">
              <a href="/login" type="button" class="relative inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white  hover:bg-indigo-600 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-600 active:bg-indigo-600 transition duration-150 ease-in-out">
                <span>Login
                </span>
              </a>
            </span>
          </div>
          <div class="flex-shrink-0">
            <span class="rounded-md">
              <a href="/registration" type="button" class=" m-4 relative inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white  hover:bg-indigo-600 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-600 active:bg-indigo-600 transition duration-150 ease-in-out">
                <span>Register
                </span>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
    

    <!--
      Mobile menu, toggle classes based on menu state.

      Menu open: "block", Menu closed: "hidden"
    -->
    <div class="hidden md:hidden">
      <div class="px-2 pt-2 pb-3 sm:px-3">
        <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Dashboard
        </a>
        <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Team
        </a>
        <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Projects
        </a>
        <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Calendar
        </a>
      </div>
      <div class="pt-4 pb-3 border-t border-gray-700">
        <div class="flex items-center px-5 sm:px-6">
          <div class="flex-shrink-0">
            <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
          </div>
          <div class="ml-3">
            <div class="text-base font-medium leading-6 text-white">Tom Cook
            </div>
            <div class="text-sm font-medium leading-5 text-gray-400">tom@example.com
            </div>
          </div>
        </div>
        <div class="mt-3 px-2 sm:px-3">
          <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Your Profile
          </a>
          <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Settings
          </a>
          <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Sign out
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>
