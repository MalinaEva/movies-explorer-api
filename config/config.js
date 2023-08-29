require('dotenv').config();

const {
  FRONTEND_URL = 'http://localhost:4000',
  BACKEND_URL = 'http://localhost:3000',
  NODE_ENV = 'development',
  PORT = '3000',
  DB_HOST = 'localhost',
  DB_PORT = '27017',
  DB_NAME = 'bitfilmsdb',
  JWT_SECRET_DEV = 'hfu1ohfo1hWUWwussjdhsj',
} = process.env;

const DB_URL = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;

const JWT_SECRET = NODE_ENV === 'production' ? process.env.JWT_SECRET : JWT_SECRET_DEV;
const API_PREFIX = NODE_ENV === 'production' ? '/api' : '';

module.exports = {
  FRONTEND_URL,
  BACKEND_URL,
  PORT,
  DB_URL,
  JWT_SECRET,
  API_PREFIX,
};
