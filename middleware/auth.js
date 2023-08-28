const jwt = require('jsonwebtoken');
const handleError = require('./errorHandler');
const { JWT_SECRET } = require('../config/config');
const AuthError = require('../errors/AuthError');
const { UNAUTHORIZED_MESSAGE } = require('../utils/statuses');

module.exports = (req, res, next) => {
  const token = req.headers.authorization && req.headers.authorization.split(' ')[1];

  if (!token) {
    return handleError(new AuthError(UNAUTHORIZED_MESSAGE), res);
  }

  try {
    req.user = jwt.verify(token, JWT_SECRET);
    return next();
  } catch (err) {
    return handleError(err, res);
  }
};
