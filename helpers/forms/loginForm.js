export default [
  {
    name: 'email',
    type: 'email',
    autocomplete: 'email',
    label: 'Your E-mail',
    rules: 'required|email',
    messages: {
      required: 'We need your email! please.',
      email: 'No no no, give me a real email!'
    },
    value: ''
  },
  {
    name: 'password',
    type: 'password',
    autocomplete: 'new-password',
    label: 'Create password',
    rules: 'required|min:8',
    messages: {
      required: 'No password? really?!',
      'min:8': 'Are you kidding me? give me your real password!'
    },
    value: ''
  }
]
