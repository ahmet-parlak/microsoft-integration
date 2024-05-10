const express = require('express');

const microsoftAuthMiddleware = require.main.require(
  './middlewares/Microsoft/auth'
);
const microsoftServiceMiddleware = require.main.require(
  './middlewares/Microsoft/service'
);
const noteController = require.main.require(
  './controllers/Microsoft/Note/noteController'
);

const router = express.Router();

router.all('/*', microsoftAuthMiddleware, microsoftServiceMiddleware);

router.get('/notebooks', noteController.getNotebooks);
router.get('/notebooks/:id/sections', noteController.getNotebookSections);
router.get('/sections', noteController.getSections);
router.get('/sections/:id', noteController.getSection);
router.get('/sections/:id/pages', noteController.getSectionPages);
router.get('/pages', noteController.getPages);
router.get('/pages/:id', noteController.getPage);
router.get('/pages/:id/content', noteController.getPageContent);
router.post('/notebooks', noteController.createNotebook);
router.post('/notebooks/:id/sections', noteController.createNotbookSection);
router.post('/pages', noteController.createPage);
router.post('/sections/:id/pages', noteController.createSectionPage);
router.delete('/pages/:id', noteController.deletePage);
router.delete('/sections/:id', noteController.deleteSection);
router.delete('/notebooks/:id', noteController.deleteNotebook);

module.exports = router;
