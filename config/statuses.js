const OK = 200;
const CREATED = 201;
const BAD_REQUEST = 400;
const UNAUTHORIZED = 401;
const FORBIDDEN = 403;
const NOT_FOUND = 404;
const CONFLICT = 409;
const INTERNAL_SERVER_ERROR = 500;

const USER_NOT_FOUND = 'Пользователь не найден';
const NOT_VALID_DATA = 'Переданы некорректные данные';
const NOT_FOUND_MESSAGE = 'Страница не найдена';
const MOVIE_DELETED = 'Фильм удален';
const MOVIE_NOT_FOUND = 'Фильм не найден';
const UNAUTHORIZED_MESSAGE = 'Необходима авторизация';
const FORBIDDEN_MESSAGE = 'Недостаточно прав';
const CONFLICT_MESSAGE = 'Пользователь с таким email уже существует';
const INTERNAL_SERVER_ERROR_MESSAGE = 'На сервере произошла ошибка';
const TOO_MANY_REQUESTS_MESSAGE = 'Слишком много запросов с одного IP, попробуйте позже';
const SUCCESS_LOGIN = 'Успешный вход';
const INCORRECT_EMAIL_OR_PASSWORD = 'Неправильные почта или пароль';

module.exports = {
  OK,
  CREATED,
  BAD_REQUEST,
  NOT_FOUND,
  INTERNAL_SERVER_ERROR,
  INTERNAL_SERVER_ERROR_MESSAGE,
  USER_NOT_FOUND,
  NOT_VALID_DATA,
  NOT_FOUND_MESSAGE,
  UNAUTHORIZED,
  UNAUTHORIZED_MESSAGE,
  FORBIDDEN,
  FORBIDDEN_MESSAGE,
  CONFLICT,
  CONFLICT_MESSAGE,
  MOVIE_DELETED,
  MOVIE_NOT_FOUND,
  TOO_MANY_REQUESTS_MESSAGE,
  SUCCESS_LOGIN,
  INCORRECT_EMAIL_OR_PASSWORD,
};
