const express = require('express');
const authController = require('../controllers/authController');
const registerValidator = require('../middlewares/validators/register');
const validaton = require('../middlewares/validation');
const loginMiddleware = require('../middlewares/login');

const router = express.Router();

router.post('/register', registerValidator, validaton, authController.register);
router.post('/login', loginMiddleware, authController.login);

module.exports = router;
