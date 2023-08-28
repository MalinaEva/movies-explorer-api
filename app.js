const mongoose = require('mongoose');
const helmet = require('helmet');
const { errors } = require('celebrate');
const cors = require('cors');
const express = require('express');
const rateLimit = require('express-rate-limit');
const routes = require('./routes/index');
const { DB_URL, PORT, API_PREFIX } = require('./config/config');
const { requestLogger, errorLogger, debugLogger } = require('./middleware/logger');
const rateLimitConfig = require('./config/rateLimit');
const corsConfig = require('./config/cors');
const { sendResponse } = require('./utils/sendResponse');
const { NOT_FOUND_MESSAGE, NOT_FOUND } = require('./utils/statuses');

mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(requestLogger);
app.use(helmet());
app.use(cors(corsConfig));
app.use(rateLimit(rateLimitConfig));

app.use(API_PREFIX, routes);

app.use((req, res) => sendResponse(res, { message: NOT_FOUND_MESSAGE }, NOT_FOUND));

app.use(errorLogger);
app.use(errors());

app.listen(PORT, () => {
  debugLogger.debug(`Сервер успешно запущен на порту ${PORT}`);
});
