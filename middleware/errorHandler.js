const { sendResponse } = require('../utils/sendResponse');
const {
  BAD_REQUEST,
  INTERNAL_SERVER_ERROR,
  INTERNAL_SERVER_ERROR_MESSAGE,
  CONFLICT,
  CONFLICT_MESSAGE,
} = require('../utils/statuses');

function handleError (err, res) {
  if (['CastError', 'ValidationError'].includes(err.name)) {
    return sendResponse(res, { message: err.message }, BAD_REQUEST);
  }
  if (['AuthError', 'NotFound', 'Forbidden'].includes(err.name)) {
    return sendResponse(res, { message: err.message }, err.statusCode);
  }
  if (err.code === 11000) {
    return sendResponse(res, { message: CONFLICT_MESSAGE }, CONFLICT);
  }
  return sendResponse(res, { message: INTERNAL_SERVER_ERROR_MESSAGE }, INTERNAL_SERVER_ERROR);
}

module.exports = handleError;
