import Errors from './Errors'
import Validator from './Validator'

export default class Form {
  /**
   * Create a new Form instance.
   *
   * @param {array} fields
   * @param {Object} $axios
   */
  constructor(fields, $axios) {
    this.$axios = $axios
    this.fields = fields
    this.errors = new Errors()
    this.validator = new Validator()
  }

  /**
   * Fetch all relevant data for the form.
   */
  data() {
    const data = {}
    for (const property of this.fields) {
      data[property.name] = property.value
    }
    return data
  }

  /**
   * Reset the form fields.
   */
  reset() {
    for (const field of this.fields) {
      field.value = ''
    }
    this.errors.clear()
  }

  /**
   * Send a POST request to the given URL.
   * .
   * @param {string} url
   */
  post(url) {
    return this.submit('post', url)
  }

  /**
   * Send a PUT request to the given URL.
   * .
   * @param {string} url
   */
  put(url) {
    return this.submit('put', url)
  }

  /**
   * Send a PATCH request to the given URL.
   * .
   * @param {string} url
   */
  patch(url) {
    return this.submit('patch', url)
  }

  /**
   * Send a DELETE request to the given URL.
   * .
   * @param {string} url
   */
  delete(url) {
    return this.submit('delete', url)
  }

  /**
   * Submit the form.
   *
   * @param {string} requestType
   * @param {string} url
   */
  submit(requestType, url) {
    if (this.errors.any()) return
    return new Promise((resolve, reject) => {
      this.$axios[requestType](url, this.data())
        .then((response) => {
          this.onSuccess(response.data)

          resolve(response.data)
        })
        .catch((error) => {
          this.onFail(error.response?.data?.errors)

          reject(error.response.data)
        })
    })
  }

  /**
   * Handle field validation.
   *
   * @param {object} field
   */
  validate(field) {
    const rules = field.rules?.split('|')
    if (!rules) return true

    for (const rule of rules) {
      const validation = this.validateRule(rule, field)
      if (!validation) {
        this.errors.append(field.name, field.messages[rule])
        return
      }
    }
  }

  /**
   * Map the validation rule to the validator function.
   * Note: Validation bails with the first false rule.
   * @param {string} rule
   * @param {Object} field
   */
  validateRule(rule, field) {
    const minRegex = /min:(.*)/
    const sameRegex = /same:(.*)/
    switch (rule) {
      case 'required':
        return this.validator.required(field.value)
      case 'email':
        return this.validator.email(field.value)
      case 'alphanumeric':
        return this.validator.alphanumeric(field.value)
      /**
       * If the string matches the form 'min:<anything>'
       * Will cut the string to get the number then send to validator
       */
      case minRegex.exec(rule)?.[0]: {
        const match = minRegex.exec(rule)
        return this.validator.min(field.value, Number(match[1]))
      }
      /**
       * If the string matches the form 'same:<anything>'
       * Will cut the string to get the other field then send them to the validator
       */
      case sameRegex.exec(rule)?.[0]: {
        const match = sameRegex.exec(rule)

        // Find the other field value
        const wantedMatchField = this.fields.find(
          ({ name }) => name === match[1]
        )
        return this.validator.same(field.value, wantedMatchField.value)
      }
    }
  }

  /**
   * Handle a successful form submission.
   *
   * @param {object} data
   */
  onSuccess(data) {
    this.reset()
  }

  /**
   * Handle a failed form submission.
   *
   * @param {object} errors
   */
  onFail(errors) {
    this.errors.record(errors)
  }
}
