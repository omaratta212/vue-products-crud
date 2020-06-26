<template>
  <dialog class="h-auto w-11/12 md:w-3/12 p-5  bg-white-900 rounded-md ">
    <div class="flex flex-col w-full h-auto ">
      <!-- Header -->
      <div class="flex w-full h-auto justify-between items-center p-3">
        <h2 class="text-lg font-medium">
          {{ title }}
        </h2>
        <div
          class="flex w-1/12 h-auto justify-center cursor-pointer"
          @click="$el.close()"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-x"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </div>
        <!--Header End-->
      </div>
      <div
        class="divide-y border border-gray-300 border-r-8 divide-gray-400 border-1"
      />

      <!-- Modal Content-->
      <div
        class="flex flex-col w-full h-auto py-5 px-2 justify-center items-center rounded text-center"
      >
        <slot></slot>
      </div>
      <!-- End of Modal Content-->
    </div>
  </dialog>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  methods: {
    open() {
      this.$el.showModal()
    },
    close() {
      this.$el.close()
    }
  }
}
</script>
