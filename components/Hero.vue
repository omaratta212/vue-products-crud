<template>
  <section class="text-gray-700 body-font">
    <div
      class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"
    >
      <div
        class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
      >
        <h1
          class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"
        >
          The computer dictates how you do something, whereas with a pencil
          you're totally free.
        </h1>
        <p class="mb-8 leading-relaxed">
          Ideas are elusive, slippery things. Best to keep a pad of paper and a
          pencil at your bedside, so you can stab them during the night before
          they get away.
        </p>
        <div v-if="!$auth.loggedIn" class="flex justify-center">
          <nuxt-link
            :to="{ name: 'register' }"
            class="inline-flex text-white bg-indigo-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-700 rounded text-lg font-medium tracking-wide"
          >
            Create account
          </nuxt-link>
          <nuxt-link
            :to="{ name: 'login' }"
            class="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg font-medium tracking-wide"
          >
            Login
          </nuxt-link>
        </div>
      </div>
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img
          class="object-cover object-center rounded"
          alt="hero"
          src="~/static/images/hero.jpg"
        />
      </div>
    </div>
  </section>
</template>
