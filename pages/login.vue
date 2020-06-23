<template>
  <section class="text-gray-700 body-font">
    <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
      <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
        <h1 class="title-font font-medium text-3xl text-gray-900">
          Slow-carb next level shoindcgoitch ethical authentic, poko scenester
        </h1>
        <p class="leading-relaxed mt-4">
          Poke slow-carb mixtape knausgaard, typewriter street art gentrify
          hammock starladder roathse. Craies vegan tousled etsy austin.
        </p>
      </div>
      <div
        class="lg:w-2/6 md:w-1/2 bg-gray-200 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0"
      >
        <h2 class="text-gray-900 text-lg font-medium title-font mb-5">
          Login
        </h2>

        <label class="text-base mb-2 sr-only" for="login"
          >E-mail or username</label
        >
        <input
          id="login"
          autocomplete="email"
          class="bg-white rounded border border-gray-400 focus:outline-none focus:border-blue-500 text-base px-4 py-2 mb-4"
          name="email"
          placeholder="E-mail or username"
          type="text"
        />
        <label class="text-base mb-2 sr-only" for="password"
          >Your password</label
        >
        <input
          id="password"
          autocomplete="current-password"
          class="bg-white rounded border border-gray-400 focus:outline-none focus:border-blue-500 text-base px-4 py-2 mb-4"
          name="password"
          placeholder="Your password"
          type="email"
        />
        <button
          class="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg"
        >
          Button
        </button>
        <p class="text-sm text-gray-500 mt-3">
          Don't have an account?
          <nuxt-link :to="{ name: 'register' }" class="text-blue-900"
            >Create account
          </nuxt-link>
        </p>
      </div>
    </div>
  </section>
</template>
