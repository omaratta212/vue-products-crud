export default class Validator {
  /**
   * Check the existence of a value
   * @param value
   * @returns {Boolean}
   */
  required(value) {
    return !!value
  }

  /**
   * Validate email through regex
   * Source: https://emailregex.com/
   * @param {string} emailStr
   * @returns {any}
   */
  email(emailStr) {
    if (!this.required(emailStr)) return false
    // eslint-disable-next-line no-useless-escape
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const extractedEmail = re.exec(emailStr)
    return !!extractedEmail
  }

  /**
   * Validate the length of a string is less than certain number.
   * @param {string} string
   * @param {number} minimum
   * @returns {Boolean}
   */
  min(string, minimum) {
    if (!this.required(string)) return false
    return string.length >= minimum
  }

  /**
   * Validate the length of a string is more than certain number.
   * @param {string} string
   * @param {number} maximum
   * @returns {Boolean}
   */
  max(string, maximum) {
    if (!this.required(string)) return false
    return string.length <= maximum
  }

  /**
   * Validate that certain string is alpha numeric, doesn't contain special characters.
   * @param {string} string
   * @returns {Boolean}
   */
  alphanumeric(string) {
    if (!this.required(string)) return false
    const re = /^[a-zA-Z0-9]*$/
    const extractedString = re.exec(string)
    return !!extractedString
  }

  /**
   * Validate that certain string || number is numeric, only contains numbers.
   * @param {string} string
   * @returns {Boolean}
   */
  numeric(string) {
    const re = /^\d+$/
    const extractedString = re.exec(string)
    return !!extractedString
  }

  /**
   * Validate that certain string is equal to another string.
   * @param {string} string
   * @param {string} wantedMatch
   * @returns {Boolean}
   */
  same(string, wantedMatch) {
    return string === wantedMatch
  }
}
