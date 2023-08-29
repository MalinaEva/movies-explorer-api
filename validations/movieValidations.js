const Joi = require('joi');

const createMovieValidation = Joi.object({
  country: Joi.string().required(),
  director: Joi.string().required(),
  duration: Joi.number().required(),
  year: Joi.string().required(),
  description: Joi.string().required(),
  image: Joi.string().uri().required(),
  trailer: Joi.string().uri().required(),
  thumbnail: Joi.string().uri().required(),
  movieId: Joi.number().required(),
  nameRU: Joi.string().required(),
  nameEN: Joi.string().required(),
});

const movieIdValidationSchema = Joi.object({
  cardId: Joi.string().pattern(/^[0-9a-fA-F]{24}$/).required(),
});

module.exports = {
  createMovieValidation,
  movieIdValidationSchema,
};
