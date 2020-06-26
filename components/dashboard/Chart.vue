<template>
  <div class="w-full px-6 sm:w-1/2 xl:w-1/3">
    <div class="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
      <div class="p-3 rounded-full bg-opacity-75">
        <slot></slot>
      </div>

      <div class="mx-5">
        <h4 class="text-2xl font-semibold text-gray-700">
          {{ chart.number }}
        </h4>
        <div class="text-gray-500">{{ chart.description }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    chart: {
      type: Object,
      required: true
    }
  }
}
</script>
