<template>
  <header class="text-gray-700 body-font">
    <div
      class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
    >
      <nuxt-link
        to="/"
        class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
      >
        <svg
          fill="currentColor"
          viewBox="0 0 20 20"
          class="w-10 h-10 text-white p-2 bg-blue-500 rounded-full"
        >
          <path
            d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
          ></path>
        </svg>

        <span class="ml-3 text-xl">Pencils</span>
      </nuxt-link>
      <nav
        class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center"
      >
        <a href="#" class="mr-5 hover:text-gray-900">Graphite pencils</a>
        <a href="#" class="mr-5 hover:text-gray-900">Charcoal pencils</a>
        <a href="#" class="mr-5 hover:text-gray-900">Colored pencils</a>
        <a href="#" class="mr-5 hover:text-gray-900">Mechanical pencils</a>
      </nav>
      <div v-if="$auth.loggedIn">
        <div class="dropdown inline-block relative">
          <button
            class="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center"
          >
            <img
              class="w-8 h-8 rounded-full mr-4"
              :src="$auth.user.avatar"
              alt="Avatar of Jonathan Reinink"
            />
            <span class="mr-1">Dropdown</span>
            <svg
              class="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
              />
            </svg>
          </button>
          <ul
            class="dropdown-menu absolute hidden text-gray-700 pt-1 right-0	w-full"
          >
            <li>
              <a
                class="bg-gray-200 hover:bg-red-200 py-2 px-4 block whitespace-no-wrap"
                href="#"
                @click.prevent.once="logout()"
                >Logout</a
              >
            </li>
          </ul>
        </div>
      </div>
      <div v-else>
        <nuxt-link
          :to="{ name: 'register' }"
          class="inline-flex items-center text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-base"
        >
          Create Account
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </nuxt-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    async logout() {
      await this.$auth.logout()
    }
  }
}
</script>

<style>
.dropdown:hover .dropdown-menu {
  display: block;
}
</style>
