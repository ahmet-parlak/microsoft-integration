const express = require('express');
const authController = require.main.require(
  './controllers/Microsoft/Auth/authController'
);
const authMiddleware = require.main.require('./middlewares/auth');

const router = express.Router();

router.get('/oauth2', authMiddleware, authController.oauth2);
router.get('/oauth2-response', authMiddleware, authController.oauth2Redirect);

module.exports = router;
