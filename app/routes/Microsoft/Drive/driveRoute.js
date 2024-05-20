const express = require('express');

const microsoftAuthMiddleware = require.main.require(
  './middlewares/Microsoft/auth'
);
const microsoftServiceMiddleware = require.main.require(
  './middlewares/Microsoft/service'
);

const driveMiddleware = require.main.require('./middlewares/Microsoft/drive');

const driveController = require.main.require(
  './controllers/Microsoft/Drive/driveController'
);

const workbookRouter = require('./workbookRoute');

const router = express.Router();

router.all('/*', microsoftAuthMiddleware, microsoftServiceMiddleware);

router.get('/', driveController.get);
router.get('/root', driveController.getRoot);
router.delete('/items/:id', driveController.deleteItem);
router.get('/items/:id/children', driveController.getChildren);
router.post('/items/:id/children', driveController.createFolder);
router.put('/items/:id/upload', driveMiddleware.upload, driveController.upload);
router.get('/search', driveController.search);

router.use('/items/:id/workbook', workbookRouter);

module.exports = router;
