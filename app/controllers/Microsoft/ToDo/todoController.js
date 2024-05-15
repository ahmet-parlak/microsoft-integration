const todoService = require.main.require('./services/Microsoft/to-do.js');

exports.getLists = async (req, res) => {
  const serviceRes = await todoService.getTaskLists();

  res.status(serviceRes.status).json(serviceRes.data);
};

exports.createList = async (req, res) => {
  const name = req.body.name;

  const serviceRes = await todoService.createTaskList(name);

  res.status(serviceRes.status).json(serviceRes.data);
};

exports.getList = async (req, res) => {
  const listId = req.params.id;

  const serviceRes = await todoService.getTaskList(listId);

  res.status(serviceRes.status).json(serviceRes.data);
};

exports.updateList = async (req, res) => {
  const listId = req.params.id;
  const name = req.body.name;

  const serviceRes = await todoService.updateTaskList(listId, name);

  res.status(serviceRes.status).json(serviceRes.data);
};

exports.deleteList = async (req, res) => {
  const listId = req.params.id;
  const serviceRes = await todoService.deleteTaskList(listId);

  res.status(serviceRes.status).json(serviceRes.data);
};

exports.getTasks = async (req, res) => {
  const listId = req.params.id;
  const serviceRes = await todoService.getTasks(listId);

  res.status(serviceRes.status).json(serviceRes.data);
};

exports.getTask = async (req, res) => {
  const listId = req.params.list_id;
  const taskId = req.params.task_id;
  const serviceRes = await todoService.getTask(listId, taskId);

  res.status(serviceRes.status).json(serviceRes.data);
};

exports.createTask = async (req, res) => {
  const listId = req.params.id;
  const body = req.body.body;
  const title = req.body.title;
  const status = req.body?.status;

  const task = {
    title,
    body: {
      content: body,
      contentType: 'text',
    },
    status,
  };

  const serviceRes = await todoService.createTask(listId, task);

  res.status(serviceRes.status).json(serviceRes.data);
};

exports.updateTask = async (req, res) => {
  const listId = req.params.list_id;
  const taskId = req.params.task_id;
  const body = req.body.body;
  const title = req.body.title;
  const status = req.body.status;

  const task = {
    title,
    body: {
      content: body,
      contentType: 'text',
    },
    status,
  };
  Object.keys(task).forEach((key) =>
    task[key] === undefined ? delete task[key] : {}
  );

  const serviceRes = await todoService.updateTask(listId, taskId, task);

  res.status(serviceRes.status).json(serviceRes.data);
};

exports.deleteTask = async (req, res) => {
  const listId = req.params.list_id;
  const taskId = req.params.task_id;

  const serviceRes = await todoService.deleteTask(listId, taskId);

  res.status(serviceRes.status).json(serviceRes.data);
};

exports.getChecklistItems = async (req, res) => {
  const listId = req.params.list_id;
  const taskId = req.params.task_id;

  const serviceRes = await todoService.getChecklistItems(listId, taskId);

  res.status(serviceRes.status).json(serviceRes.data);
};

exports.createChecklistItem = async (req, res) => {
  const listId = req.params.list_id;
  const taskId = req.params.task_id;

  const name = req.body.name;
  const isChecked = req.body.isChecked ?? false;

  const item = { displayName: name, isChecked };

  const serviceRes = await todoService.createChecklistItem(
    listId,
    taskId,
    item
  );

  res.status(serviceRes.status).json(serviceRes.data);
};

exports.getChecklistItem = async (req, res) => {
  const listId = req.params.list_id;
  const taskId = req.params.task_id;
  const itemId = req.params.checklist_item_id;

  const serviceRes = await todoService.getChecklistItems(
    listId,
    taskId,
    itemId
  );

  res.status(serviceRes.status).json(serviceRes.data);
};

exports.updateChecklistItem = async (req, res) => {
  const listId = req.params.list_id;
  const taskId = req.params.task_id;
  const itemId = req.params.checklist_item_id;

  const name = req.body.name;
  const isChecked = req.body.isChecked ?? false;

  const item = { name, isChecked };

  Object.keys(item).forEach((key) =>
    item[key] === undefined ? delete item[key] : {}
  );

  const serviceRes = await todoService.updateChecklistItem(
    listId,
    taskId,
    itemId,
    item
  );

  res.status(serviceRes.status).json(serviceRes.data);
};

exports.deleteChecklistItem = async (req, res) => {
  const listId = req.params.list_id;
  const taskId = req.params.task_id;
  const itemId = req.params.checklist_item_id;

  const serviceRes = await todoService.deleteChecklistItem(
    listId,
    taskId,
    itemId
  );

  res.status(serviceRes.status).json(serviceRes.data);
};
