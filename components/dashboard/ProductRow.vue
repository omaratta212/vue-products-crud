<template>
  <tr>
    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
      <div class="text-sm leading-5 text-gray-900">
        {{ product.id }}
      </div>
    </td>
    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
      <div class="flex items-center">
        <div class="flex-shrink-0 h-24 w-24">
          <img
            class="rounded-full h-24 w-24 object-cover"
            :src="product.image"
            alt="product.name"
          />
        </div>

        <div class="ml-4">
          <div class="text-sm leading-5 font-medium text-gray-900">
            {{ product.name }}
          </div>
        </div>
      </div>
    </td>

    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
      <span
        class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
        >{{ product.price }}</span
      >
    </td>

    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
      <div class="text-sm leading-5 text-gray-900">
        {{ product.description }}
      </div>
    </td>
    <td
      class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium"
    >
      <div class="h-full">
        <div class="flex justify-around">
          <button
            class="text-indigo-600 hover:text-indigo-900"
            @click="$emit('edit', product)"
          >
            Edit
          </button>
          <button
            class="text-red-600 hover:text-indigo-900"
            @click="$emit('delete', product.id)"
          >
            Delete
          </button>
        </div>
      </div>
    </td>
  </tr>
</template>
<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>
