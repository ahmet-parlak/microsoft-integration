const express = require('express');

const microsoftAuthMiddleware = require.main.require(
  './middlewares/Microsoft/auth'
);
const microsoftServiceMiddleware = require.main.require(
  './middlewares/Microsoft/service'
);
const mailController = require.main.require(
  './controllers/Microsoft/Mail/mailController'
);

const router = express.Router();

router.all('/*', microsoftAuthMiddleware, microsoftServiceMiddleware);

router.get('/messages', mailController.getMessages);
router.post('/messages', mailController.sendMail);
router.delete('/messages/:id', mailController.deleteMessage);
router.get('/messages/:id', mailController.getMessage);

module.exports = router;
