<template>
  <div>
    <div class="hidden sm:block">
      <div class="py-5">
        <div class="border-t border-gray-200"></div>
      </div>
    </div>
    <div class=" p-8 mt-10 sm:mt-0">
      <div class="md:grid md:grid-cols-3 md:gap-6">
        <div class="md:col-span-1">
          <div class="px-4 sm:px-0">
            <h3 class="text-lg font-medium leading-6 text-gray-900">Facility Information
            </h3>
            <p class="mt-1 text-sm leading-5 text-gray-600">
              Hospitals, Healthcare groups, or other facilities:
            </p>
          </div>
        </div>
        <div class="mt-5 md:mt-0 md:col-span-2">
          <form action="#" method="POST">
            <div class="shadow overflow-hidden sm:rounded-md">
              <div class="px-4 py-5 bg-white sm:p-6">
                <div class="grid grid-cols-6 gap-6">
                  <div class="col-span-6 sm:col-span-4">
                    <label for="facility_name" class="block text-sm font-medium leading-5 text-gray-700">Facility Name
                    </label>
                    <input id="email_address" class="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                  </div>
                  <div class="col-span-6 sm:col-span-3">
                    <label for="first_name" class="block text-sm font-medium leading-5 text-gray-700">First name
                    </label>
                    <input id="first_name" class="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <label for="last_name" class="block text-sm font-medium leading-5 text-gray-700">Last name
                    </label>
                    <input id="last_name" class="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                  </div>

                  <div class="col-span-6 sm:col-span-4">
                    <label for="email_address" class="block text-sm font-medium leading-5 text-gray-700">Email address
                    </label>
                    <input id="email_address" class="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <label for="country" class="block text-sm font-medium leading-5 text-gray-700">Country / Region
                    </label>
                    <select id="country" class="mt-1 block form-select w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                      <option>United States
                      </option>
                      <option>Canada
                      </option>
                      <option>Mexico
                      </option>
                    </select>
                  </div>
                  <div class="col-span-6">
                    <label for="street_address" class="block text-sm font-medium leading-5 text-gray-700">Street address
                    </label>
                    <input id="street_address" class="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                  </div>

                  <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                    <label for="city" class="block text-sm font-medium leading-5 text-gray-700">City
                    </label>
                    <input id="city" class="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                  </div>

                  <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label for="state" class="block text-sm font-medium leading-5 text-gray-700">State / Province
                    </label>
                    <input id="state" class="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                  </div>

                  <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label for="postal_code" class="block text-sm font-medium leading-5 text-gray-700">ZIP / Postal
                    </label>
                    <input id="postal_code" class="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                  </div>
                </div>
              </div>
              <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button class="py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-500 focus:outline-none focus:shadow-outline-blue active:bg-indigo-600 transition duration-150 ease-in-out">
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="hidden sm:block">
      <div class="py-5">
        <div class="border-t border-gray-200"></div>
      </div>
    </div>
  </div>
</template>