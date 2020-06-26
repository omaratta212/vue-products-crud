<template>
  <div class="mb-4 text-left">
    <label
      :for="label.replace(' ', '-')"
      class="text-gray-700 ml-2 font-medium mb-2"
      :class="{ 'sr-only': !showLabel }"
      >{{ label }}</label
    >
    <input
      :id="label.replace(' ', '-')"
      :type="type"
      :value="value"
      v-bind="$attrs"
      :placeholder="label"
      class="bg-white rounded-lg border border-gray-400 focus:outline-none focus:border-blue-500 text-base px-4 py-2 w-full"
      :class="{ 'border-red-500': error }"
      v-on="$listeners"
      @input="$emit('update', $event.target.value)"
    />
    <p
      v-if="error"
      class="text-red-500 text-sm italic text-left ml-2"
      v-text="error"
    ></p>
  </div>
</template>

<script>
const TYPES = [
  'text',
  'password',
  'email',
  'number',
  'url',
  'tel',
  'search',
  'color',
  'hidden'
]
const includes = (types) => (type) => types.includes(type)

export default {
  inheritAttrs: false,
  model: {
    prop: 'value',
    event: 'update'
  },
  props: {
    label: {
      type: String,
      default: ''
    },
    error: {
      type: String,
      default: ''
    },
    value: {
      type: [String, Number],
      default: ''
    },
    showLabel: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'text',
      validator(value) {
        const isValid = includes(TYPES)(value)
        if (!isValid) {
          // eslint-disable-next-line
            console.warn(`allowed types are ${TYPES}`);
        }
        return isValid
      }
    }
  }
}
</script>
