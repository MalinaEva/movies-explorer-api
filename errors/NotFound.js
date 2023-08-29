const { NOT_FOUND, NOT_FOUND_MESSAGE } = require('../config/statuses');

class NotFound extends Error {
  constructor (message = NOT_FOUND_MESSAGE, statusCode = NOT_FOUND) {
    super(message);
    this.name = this.constructor.name;
    this.statusCode = statusCode;
  }
}

module.exports = NotFound;
