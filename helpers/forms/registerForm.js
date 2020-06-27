export default [
  {
    name: 'name',
    type: 'text',
    autocomplete: 'username',
    label: 'Your username',
    rules: 'required|alphanumeric|min:3',
    messages: {
      required: "I didn't get that, whats's your name?",
      alphanumeric: 'Username can contain only letters & numbers.',
      'min:3': 'Too short :('
    },
    value: ''
  },
  {
    name: 'email',
    type: 'email',
    autocomplete: 'email',
    label: 'Email address',
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
      'min:8': 'Are you kidding me? create a real password!'
    },
    value: ''
  },
  {
    name: 'password_confirmation',
    type: 'password',
    autocomplete: 'new-password',
    label: 'Confirm password',
    rules: 'required|same:password',
    messages: {
      required: 'We need to make sure you remember the password!',
      'same:password': "Passwords don't match, let's make another one."
    },
    value: ''
  }
]
