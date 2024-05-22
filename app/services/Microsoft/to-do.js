const axios = require('axios');
const { config } = require('./auth');

exports.getTaskLists = async () => {
  const url = `https://graph.microsoft.com/v1.0/me/todo/lists`;

  return axios
    .get(url, config)
    .then((response) => response)
    .catch((err) => {
      return (
        err?.response ?? { status: 500, data: { message: 'An error occured' } }
      );
    });
};

exports.createTaskList = async (name) => {
  const url = `https://graph.microsoft.com/v1.0/me/todo/lists`;

  const taskList = { displayName: name };

  config.headers['Content-Type'] = 'application/json';
  return axios
    .post(url, taskList, config)
    .then((response) => response)
    .catch((err) => {
      return (
        err?.response ?? { status: 500, data: { message: 'An error occured' } }
      );
    });
};

exports.getTaskList = async (id) => {
  const url = `https://graph.microsoft.com/v1.0/me/todo/lists/${id}`;

  return axios
    .get(url, config)
    .then((response) => response)
    .catch((err) => {
      return (
        err?.response ?? { status: 500, data: { message: 'An error occured' } }
      );
    });
};

exports.updateTaskList = async (id, name) => {
  const url = `https://graph.microsoft.com/v1.0/me/todo/lists/${id}`;
  const taskList = { displayName: name };

  config.headers['Content-Type'] = 'application/json';
  return axios
    .patch(url, taskList, config)
    .then((response) => response)
    .catch((err) => {
      return (
        err?.response ?? { status: 500, data: { message: 'An error occured' } }
      );
    });
};

exports.deleteTaskList = async (id) => {
  const url = `https://graph.microsoft.com/v1.0/me/todo/lists/${id}`;

  return axios
    .delete(url, config)
    .then((response) => response)
    .catch((err) => {
      return (
        err?.response ?? { status: 500, data: { message: 'An error occured' } }
      );
    });
};

exports.getTasks = async (id) => {
  const url = `https://graph.microsoft.com/v1.0/me/todo/lists/${id}/tasks`;
  return axios
    .get(url, config)
    .then((response) => response)
    .catch((err) => {
      return (
        err?.response ?? { status: 500, data: { message: 'An error occured' } }
      );
    });
};

exports.getTask = async (list_id, task_id) => {
  const url = `https://graph.microsoft.com/v1.0/me/todo/lists/${list_id}/tasks/${task_id}`;
  return axios
    .get(url, config)
    .then((response) => response)
    .catch((err) => {
      return (
        err?.response ?? { status: 500, data: { message: 'An error occured' } }
      );
    });
};

exports.createTask = async (taskListId, task) => {
  const url = `https://graph.microsoft.com/v1.0/me/todo/lists/${taskListId}/tasks`;

  config.headers['Content-Type'] = 'application/json';
  return axios
    .post(url, task, config)
    .then((response) => response)
    .catch((err) => {
      return (
        err?.response ?? { status: 500, data: { message: 'An error occured' } }
      );
    });
};

exports.updateTask = async (taskListId, taskId, task) => {
  const url = `https://graph.microsoft.com/v1.0/me/todo/lists/${taskListId}/tasks/${taskId}`;

  config.headers['Content-Type'] = 'application/json';
  return axios
    .patch(url, task, config)
    .then((response) => response)
    .catch((err) => {
      return (
        err?.response ?? { status: 500, data: { message: 'An error occured' } }
      );
    });
};

exports.deleteTask = async (taskListId, taskId) => {
  const url = `https://graph.microsoft.com/v1.0/me/todo/lists/${taskListId}/tasks/${taskId}`;
  return axios
    .delete(url, config)
    .then((response) => response)
    .catch((err) => {
      return (
        err?.response ?? { status: 500, data: { message: 'An error occured' } }
      );
    });
};

exports.getChecklistItems = async (taskListId, taskId) => {
  const url = `https://graph.microsoft.com/v1.0/me/todo/lists/${taskListId}/tasks/${taskId}/checklistItems`;
  return axios
    .get(url, config)
    .then((response) => response)
    .catch((err) => {
      return (
        err?.response ?? { status: 500, data: { message: 'An error occured' } }
      );
    });
};

exports.createChecklistItem = async (taskListId, taskId, checklistItem) => {
  const url = `https://graph.microsoft.com/v1.0/me/todo/lists/${taskListId}/tasks/${taskId}/checklistItems`;

  config.headers['Content-Type'] = 'application/json';
  return axios
    .post(url, checklistItem, config)
    .then((response) => response)
    .catch((err) => {
      return (
        err?.response ?? { status: 500, data: { message: 'An error occured' } }
      );
    });
};

exports.getChecklistItem = async (taskListId, taskId, checklistItemId) => {
  const url = `https://graph.microsoft.com/v1.0/me/todo/lists/${taskListId}/tasks/${taskId}/checklistItems/${checklistItemId}`;
  return axios
    .get(url, config)
    .then((response) => response)
    .catch((err) => {
      return (
        err?.response ?? { status: 500, data: { message: 'An error occured' } }
      );
    });
};

exports.updateChecklistItem = async (
  taskListId,
  taskId,
  checklistItemId,
  checklistItem
) => {
  const url = `https://graph.microsoft.com/v1.0/me/todo/lists/${taskListId}/tasks/${taskId}/checklistItems/${checklistItemId}`;

  config.headers['Content-Type'] = 'application/json';
  return axios
    .patch(url, checklistItem, config)
    .then((response) => response)
    .catch((err) => {
      return (
        err?.response ?? { status: 500, data: { message: 'An error occured' } }
      );
    });
};

exports.deleteChecklistItem = async (taskListId, taskId, checklistItemId) => {
  const url = `https://graph.microsoft.com/v1.0/me/todo/lists/${taskListId}/tasks/${taskId}/checklistItems/${checklistItemId}`;
  return axios
    .delete(url, config)
    .then((response) => response)
    .catch((err) => {
      return (
        err?.response ?? { status: 500, data: { message: 'An error occured' } }
      );
    });
};
