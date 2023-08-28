const express = require('express');
const validateRequest = require('../middleware/validateRequest');
const { signinValidation, signupValidation } = require('../validations/userValidations');
const { createUser, login } = require('../controllers/users');
const userRoutes = require('./users');
const movieRoutes = require('./movies');

const router = express.Router();

router.use('/users', userRoutes);
router.use('/movies', movieRoutes);
router.post('/signin', validateRequest(signinValidation), login);
router.post('/signup', validateRequest(signupValidation), createUser);

module.exports = router;
