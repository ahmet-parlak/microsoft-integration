const express = require('express');

const microsoftAuthMiddleware = require.main.require(
  './middlewares/Microsoft/auth'
);
const microsoftServiceMiddleware = require.main.require(
  './middlewares/Microsoft/service'
);
const todoController = require.main.require(
  './controllers/Microsoft/ToDo/todoController'
);

const router = express.Router();

router.all('/*', microsoftAuthMiddleware, microsoftServiceMiddleware);

router.get('/lists', todoController.getLists);
router.post('/lists', todoController.createList);
router.get('/lists/:id', todoController.getList);
router.patch('/lists/:id', todoController.updateList);
router.delete('/lists/:id', todoController.deleteList);
router.get('/lists/:id/tasks', todoController.getTasks);
router.get('/lists/:list_id/tasks/:task_id', todoController.getTask);
router.post('/lists/:id/tasks', todoController.createTask);
router.patch('/lists/:list_id/tasks/:task_id', todoController.updateTask);
router.delete('/lists/:list_id/tasks/:task_id', todoController.deleteTask);
router.get(
  '/lists/:list_id/tasks/:task_id/checklistItems',
  todoController.getChecklistItems
);
router.post(
  '/lists/:list_id/tasks/:task_id/checklistItems',
  todoController.createChecklistItem
);
router.get(
  '/lists/:list_id/tasks/:task_id/checklistItems/:checklist_item_id',
  todoController.getChecklistItem
);
router.patch(
  '/lists/:list_id/tasks/:task_id/checklistItems/:checklist_item_id',
  todoController.updateChecklistItem
);
router.delete(
  '/lists/:list_id/tasks/:task_id/checklistItems/:checklist_item_id',
  todoController.deleteChecklistItem
);

module.exports = router;
