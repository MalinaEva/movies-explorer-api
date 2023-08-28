const express = require('express');
const { getCurrentUser, updateUser } = require('../controllers/users');

const router = express.Router();
const auth = require('../middleware/auth');
const validateRequest = require('../middleware/validateRequest');
const { editProfileValidation } = require('../validations/userValidations');

router.use(auth);

router.get('/me', getCurrentUser);
router.patch('/me', validateRequest(editProfileValidation), updateUser);

module.exports = router;
