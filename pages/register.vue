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
        v-if="form.loading"
        class="lg:w-2/6 md:w-1/2 bg-gray-200 rounded-lg p-8 flex justify-center md:ml-auto w-full mt-10 md:mt-0"
      >
        <LazyLoader class="h-32 w-32" />
      </div>
      <form
        v-else
        class="lg:w-2/6 md:w-1/2 bg-gray-300 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0"
        @submit.prevent="onSubmit"
        @keydown="form.errors.clear($event.target.name)"
      >
        <h2 class="text-gray-900 text-lg font-medium title-font mb-5">
          Create new account
        </h2>
        <div
          v-if="error"
          class="bg-orange-100 border-l-4 border-red-500 text-red-700 p-4 mb-5"
          role="alert"
        >
          <p class="font-bold">{{ error }}</p>
        </div>
        <div v-for="field in form.fields" :key="field.name">
          <LazyBaseInput
            v-model="field.value"
            :name="field.name"
            :label="field.label"
            :type="field.type"
            :autocomplete="field.autocomplete"
            :error="form.errors.get(field.name)"
            @blur="form.validate(field)"
          />
        </div>
        <button
          type="submit"
          class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded-lg text-lg font-bold tracking-wide"
          :class="{ 'opacity-50 cursor-not-allowed': !form.isValid() }"
          :disabled="!form.isValid()"
        >
          Create my account
        </button>
        <p class="text-sm text-gray-800 mt-3">
          Do you have an account?
          <nuxt-link
            class="text-indigo-800 font-bold tracking-wide"
            :to="{ name: 'login' }"
            >Login now</nuxt-link
          >
        </p>
      </form>
    </div>
  </section>
</template>
<script>
import registerForm from '../helpers/forms/registerForm'
import Form from '~/helpers/Form'
export default {
  auth: 'guest',
  data() {
    return {
      error: '',
      form: new Form(registerForm, this.$axios)
    }
  },
  methods: {
    async onSubmit() {
      this.form.loading = true
      await this.$axios.$get('sanctum/csrf-cookie')
      this.form
        .post('auth/register')
        .then(() => this.$router.push('/login'))
        .catch(() => {
          this.error = 'Invalid Data, please try again!'
        })
        .finally(() => {
          this.form.loading = false
        })
    }
  }
}
</script>
