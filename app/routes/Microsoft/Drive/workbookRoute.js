const express = require('express');

const microsoftAuthMiddleware = require.main.require(
  './middlewares/Microsoft/auth'
);
const microsoftServiceMiddleware = require.main.require(
  './middlewares/Microsoft/service'
);
const workbookMiddleware = require.main.require(
  './middlewares/Microsoft/workbook'
);
const workbookController = require.main.require(
  './controllers/Microsoft/Drive/workbookController'
);

const router = express.Router({ mergeParams: true });

router.all(
  '/*',
  microsoftAuthMiddleware,
  microsoftServiceMiddleware,
  workbookMiddleware
);

router.post('/createsession', workbookController.createSession);
router.post('/refreshsession', workbookController.refreshSession);
router.post('/closesession', workbookController.closeSession);
router.get('/tables', workbookController.getTables);
router.get('/worksheets', workbookController.getWorksheets);
router.get('/names', workbookController.getNames);
router.post('/worksheets/add', workbookController.addWorksheet);
router.patch('/worksheets/:worksheet', workbookController.updateWorksheet);
router.delete('/worksheets/:worksheet', workbookController.deleteWorksheet);
router.post('/worksheets/:worksheet/tables/add', workbookController.addTable);
router.get('/worksheets/:worksheet/tables', workbookController.getTables);
router.get('/worksheets/:worksheet/tables/:table', workbookController.getTable);
router.patch('/worksheets/:worksheet/tables/:table', workbookController.updateTable);
router.delete('/worksheets/:worksheet/tables/:table', workbookController.deleteTable);
router.get('/worksheets/:worksheet/tables/:table/rows', workbookController.getRows);
router.post('/worksheets/:worksheet/tables/:table/rows', workbookController.addRow);
router.get('/worksheets/:worksheet/tables/:table/rows/:index', workbookController.getRow);
router.patch('/worksheets/:worksheet/tables/:table/rows/:index', workbookController.updateRow);
router.delete('/worksheets/:worksheet/tables/:table/rows/:index', workbookController.deleteRow);
module.exports = router;
