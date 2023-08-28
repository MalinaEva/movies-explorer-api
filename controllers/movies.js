const movie = require('../models/movie');
const NotFound = require('../errors/NotFound');
const { sendResponse } = require('../utils/sendResponse');
const {
  CREATED, MOVIE_DELETED, MOVIE_NOT_FOUND,
} = require('../utils/statuses');
const Forbidden = require('../errors/Forbidden');

exports.getMovies = (req, res, next) => {
  movie.find({ owner: req.user._id })
  .then((movies) => sendResponse(res, movies))
  .catch(next);
};

exports.createMovie = (req, res, next) => {
  const {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailer,
    nameRU,
    nameEN,
    thumbnail,
    movieId,
  } = req.body;

  movie.create({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailer,
    nameRU,
    nameEN,
    thumbnail,
    movieId,
    owner: req.user._id,
  })
  .then((currentMovie) => sendResponse(res, currentMovie, CREATED))
  .catch(next);
};

exports.deleteMovie = (req, res, next) => {
  movie.findByIdAndDelete(req.params.id)
  .then((currentMovie) => {
    if (!currentMovie) {
      throw new NotFound(MOVIE_NOT_FOUND);
    }
    if (currentMovie.owner.toString() !== req.user._id) {
      throw new Forbidden();
    }
    return sendResponse(res, { message: MOVIE_DELETED });
  })
  .catch(next);
};
