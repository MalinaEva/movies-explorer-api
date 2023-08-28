const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const user = require('../models/user');
const handleError = require('../middleware/errorHandler');
const AuthError = require('../errors/AuthError');
const { JWT_SECRET } = require('../config/config');
const NotFound = require('../errors/NotFound');
const { sendResponse } = require('../utils/sendResponse');
const {
  CREATED, SUCCESS_LOGIN, USER_NOT_FOUND,
} = require('../utils/statuses');

module.exports.createUser = (req, res) => {
  const {
    name,
    email,
    password,
  } = req.body;

  bcrypt.hash(password, 10)
  .then((hashedPassword) => user.create({
    name,
    email,
    password: hashedPassword,
  }))
  .then((data) => {
    const userData = { ...data.toObject() };
    delete userData.password;
    return sendResponse(res, userData, CREATED);
  })
  .catch((err) => handleError(err, res));
};

module.exports.login = (req, res) => {
  const { email, password } = req.body;

  user.findOne({ email }).select('+password')
  .then((data) => {
    if (!data) {
      throw new AuthError();
    }

    return bcrypt.compare(password, data.password)
    .then((matched) => {
      if (!matched) {
        throw new AuthError();
      }

      const token = jwt.sign(
        { _id: data._id.toString() },
        JWT_SECRET,
        { expiresIn: '7d' },
      );
      return sendResponse(res, { message: SUCCESS_LOGIN, token });
    });
  })
  .catch((err) => handleError(err, res));
};

exports.getCurrentUser = (req, res, next) => {
  user.findById(req.user._id)
  .then((currentUser) => {
    if (!currentUser) {
      throw new NotFound(USER_NOT_FOUND);
    }
    return sendResponse(res, { email: currentUser.email, name: currentUser.name });
  })
  .catch(next);
};

exports.updateUser = (req, res, next) => {
  const { name, email } = req.body;

  user.findByIdAndUpdate(
    req.user._id,
    { name, email },
    { new: true, runValidators: true },
  )
  .then((currentUser) => {
    if (!currentUser) {
      throw new NotFound(USER_NOT_FOUND);
    }
    return sendResponse(res, { email: currentUser.email, name: currentUser.name });
  })
  .catch(next);
};
