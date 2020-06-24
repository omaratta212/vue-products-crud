import Errors from './Errors'

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

    for (const field of fields) {
      this[field.name] = field.value
    }

    this.errors = new Errors()
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
      this[field.name] = ''
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
    return new Promise((resolve, reject) => {
      // eslint-disable-next-line no-undef
      this.$axios[requestType](url, this.data())
        .then((response) => {
          this.onSuccess(response.data)

          resolve(response.data)
        })
        .catch((error) => {
          this.onFail(error.response.data)

          reject(error.response.data)
        })
    })
  }

  /**
   * Handle a successful form submission.
   *
   * @param {object} data
   */
  onSuccess(data) {
    alert(data.message) // temporary

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
