const { FORBIDDEN_MESSAGE, FORBIDDEN } = require('../utils/statuses');

class Forbidden extends Error {
  constructor (message = FORBIDDEN_MESSAGE, statusCode = FORBIDDEN) {
    super(message);
    this.name = this.constructor.name;
    this.statusCode = statusCode;
  }
}

module.exports = Forbidden;
