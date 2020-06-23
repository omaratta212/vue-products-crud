<template>
  <section class="text-gray-700 body-font">
    <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
      <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
        <h1 class="title-font font-medium text-3xl text-gray-900">
          My favorite must have beauty product is a good, reliable black eye
          pencil.
        </h1>
        <p class="leading-relaxed mt-4">
          A pencil and rubber are of more use to thought than a battalion of
          assistants. To happiness the same applies as to truth: one does not
          have it, but is in it.
        </p>
      </div>
      <div
        class="lg:w-2/6 md:w-1/2 bg-gray-200 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0"
      >
        <h2 class="text-gray-900 text-lg font-medium title-font mb-5">
          Create new account
        </h2>
        <label for="username" class="text-base mb-2 sr-only"
          >Your username</label
        >
        <input
          id="username"
          class="bg-white rounded border border-gray-400 focus:outline-none focus:border-blue-500 text-base px-4 py-2 mb-4"
          name="username"
          autocomplete="username"
          placeholder="username"
          type="text"
        />
        <label for="email" class="text-base mb-2 sr-only">Your E-mail</label>
        <input
          id="email"
          class="bg-white rounded border border-gray-400 focus:outline-none focus:border-blue-500 text-base px-4 py-2 mb-4"
          name="email"
          autocomplete="email"
          placeholder="Email"
          type="email"
        />

        <label for="password" class="text-base mb-2 sr-only"
          >Create password</label
        >
        <input
          id="password"
          class="bg-white rounded border border-gray-400 focus:outline-none focus:border-blue-500 text-base px-4 py-2 mb-4"
          autocomplete="new-password"
          placeholder="Password"
          type="password"
        />

        <label for="password-confirmation" class="text-base mb-2 sr-only"
          >Confirm password</label
        >
        <input
          id="password-confirmation"
          class="bg-white rounded border border-gray-400 focus:outline-none focus:border-blue-500 text-base px-4 py-2 mb-4"
          autocomplete="new-password"
          placeholder="Confirm password"
          type="password"
        />
        <button
          class="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg"
        >
          Button
        </button>
        <p class="text-sm text-gray-500 mt-3">
          Do you have an account?
          <nuxt-link class="text-blue-900" :to="{ name: 'login' }"
            >Login now</nuxt-link
          >
        </p>
      </div>
    </div>
  </section>
</template>
