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
      <form
        class="lg:w-2/6 md:w-1/2 bg-gray-200 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0"
        @submit.prevent="onSubmit"
        @keydown="form.errors.clear($event.target.name)"
      >
        <h2 class="text-gray-900 text-lg font-medium title-font mb-5">
          Login
        </h2>

        <div v-for="field in form.fields" :key="field.name">
          <LazyBaseInput
            v-model="field.value"
            :label="field.label"
            :type="field.type"
            :autocomplete="field.autocomplete"
          />
        </div>

        <button
          type="submit"
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
      </form>
    </div>
  </section>
</template>
<script>
import Form from '~/helpers/Form'

export default {
  data() {
    return {
      form: new Form(
        [
          {
            name: 'name',
            type: 'text',
            autocomplete: 'username',
            label: 'Your username',
            value: ''
          },
          {
            name: 'email',
            type: 'email',
            autocomplete: 'email',
            label: 'Email address',
            value: ''
          }
        ],
        this.$axios
      )
    }
  },
  methods: {
    onSubmit() {
      this.form.post('/login').then((response) => alert('Done!'))
    }
  }
}
</script>
