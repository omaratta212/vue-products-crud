export default [
  {
    name: 'id',
    type: 'hidden',
    label: 'Id',
    showLabel: false,
    value: ''
  },
  {
    name: 'name',
    type: 'text',
    label: 'Product Name',
    rules: 'required|min:6',
    messages: {
      required: 'How come a product without name?!',
      'min:6': 'No, still not expressive enough!'
    },
    value: ''
  },
  {
    name: 'price',
    type: 'number',
    label: 'Product Price',
    rules: 'required|numeric',
    messages: {
      required: "So, you'r selling this for free??",
      numeric: 'It must to be a number you know?'
    },
    value: ''
  },
  {
    name: 'details',
    type: 'text',
    label: 'Product Details',
    rules: 'required|min:20',
    messages: {
      required: "People have to know what's that !",
      'min:20': 'Talk more about the product!'
    },
    value: ''
  }
]
