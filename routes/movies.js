const express = require('express');
const { getMovies, createMovie, deleteMovie } = require('../controllers/movies');

const router = express.Router();
const auth = require('../middleware/auth');
const validateRequest = require('../middleware/validateRequest');
const { createMovieValidation, movieIdValidationSchema } = require('../validations/movieValidations');

router.use(auth);

router.get('/', getMovies);
router.post('/', validateRequest(createMovieValidation), createMovie);
router.delete('/:id', validateRequest(movieIdValidationSchema, 'params'), deleteMovie);

module.exports = router;
