const { UNAUTHORIZED, INCORRECT_EMAIL_OR_PASSWORD } = require('../utils/statuses');

class AuthError extends Error {
  constructor (message = INCORRECT_EMAIL_OR_PASSWORD, statusCode = UNAUTHORIZED) {
    super(message);
    this.name = this.constructor.name;
    this.statusCode = statusCode;
  }
}

module.exports = AuthError;
