const { TOO_MANY_REQUESTS_MESSAGE } = require('../utils/statuses');

const config = {
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: TOO_MANY_REQUESTS_MESSAGE,
};

module.exports = config;
