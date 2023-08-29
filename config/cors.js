const { FRONTEND_URL } = require('./config');
const Forbidden = require('../errors/Forbidden');

const corsConfig = {
  origin: (origin, callback) => {
    if (FRONTEND_URL === origin || !origin) {
      callback(null, true);
    } else {
      callback(new Forbidden('Not allowed by CORS'));
    }
  },
};

module.exports = corsConfig;
