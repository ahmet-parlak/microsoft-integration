const axios = require('axios');
const { config } = require('./auth');

exports.createSession = async (itemId) => {
  const url = `https://graph.microsoft.com/v1.0/me/drive/items/${itemId}/workbook/createSession`;
  const data = { persistChanges: true };
  return axios
    .post(url, data, config)
    .then((response) => response)
    .catch((err) => {
      return (
        err?.response ?? { status: 500, data: { message: 'An error occured' } }
      );
    });
};

exports.refreshSession = async (itemId) => {
  const url = `https://graph.microsoft.com/v1.0/me/drive/items/${itemId}/workbook/refreshSession`;
  const data = {};
  return axios
    .post(url, data, config)
    .then((response) => response)
    .catch((err) => {
      return (
        err?.response ?? { status: 500, data: { message: 'An error occured' } }
      );
    });
};

exports.closeSession = async (itemId) => {
  const url = `https://graph.microsoft.com/v1.0/me/drive/items/${itemId}/workbook/closeSession`;
  const data = {};
  return axios
    .post(url, data, config)
    .then((response) => response)
    .catch((err) => {
      return (
        err?.response ?? { status: 500, data: { message: 'An error occured' } }
      );
    });
};

exports.setSessionId = (sessionId) => {
  config.headers['workbook-session-id'] = sessionId;
};

exports.getTables = (itemId) => {
  const url = `https://graph.microsoft.com/v1.0/me/drive/items/${itemId}/workbook/tables`;

  return axios
    .get(url, config)
    .then((response) => response)
    .catch((err) => {
      return (
        err?.response ?? { status: 500, data: { message: 'An error occured' } }
      );
    });
};

exports.getWorksheets = (itemId) => {
  const url = `https://graph.microsoft.com/v1.0/me/drive/items/${itemId}/workbook/worksheets`;

  return axios
    .get(url, config)
    .then((response) => response)
    .catch((err) => {
      return (
        err?.response ?? { status: 500, data: { message: 'An error occured' } }
      );
    });
};

exports.getNames = (itemId) => {
  const url = `https://graph.microsoft.com/v1.0/me/drive/items/${itemId}/workbook/names`;

  return axios
    .get(url, config)
    .then((response) => response)
    .catch((err) => {
      return (
        err?.response ?? { status: 500, data: { message: 'An error occured' } }
      );
    });
};

exports.addWorksheet = (itemId, name) => {
  const url = `https://graph.microsoft.com/v1.0/me/drive/items/${itemId}/workbook/worksheets/add`;
  const data = { name };
  return axios
    .post(url, data, config)
    .then((response) => response)
    .catch((err) => {
      return (
        err?.response ?? { status: 500, data: { message: 'An error occured' } }
      );
    });
};

exports.updateWorksheet = (itemId, worksheet, data) => {
  const url = `https://graph.microsoft.com/v1.0/me/drive/items/${itemId}/workbook/worksheets/${worksheet}`;

  return axios
    .patch(url, data, config)
    .then((response) => response)
    .catch((err) => {
      return (
        err?.response ?? { status: 500, data: { message: 'An error occured' } }
      );
    });
};

exports.deleteWorksheet = (itemId, worksheet) => {
  const url = `https://graph.microsoft.com/v1.0/me/drive/items/${itemId}/workbook/worksheets/${worksheet}`;

  return axios
    .delete(url, config)
    .then((response) => response)
    .catch((err) => {
      return (
        err?.response ?? { status: 500, data: { message: 'An error occured' } }
      );
    });
};

exports.addTable = (itemId, worksheet, data) => {
  const url = `https://graph.microsoft.com/v1.0/me/drive/items/${itemId}/workbook/worksheets/${worksheet}/tables/add`;

  return axios
    .post(url, data, config)
    .then((response) => response)
    .catch((err) => {
      return (
        err?.response ?? { status: 500, data: { message: 'An error occured' } }
      );
    });
};

exports.getTables = (itemId, worksheet) => {
  const url = `https://graph.microsoft.com/v1.0/me/drive/items/${itemId}/workbook/worksheets/${worksheet}/tables`;

  return axios
    .get(url, config)
    .then((response) => response)
    .catch((err) => {
      return (
        err?.response ?? { status: 500, data: { message: 'An error occured' } }
      );
    });
};

exports.getTable = (itemId, worksheet, table) => {
  const url = `https://graph.microsoft.com/v1.0/me/drive/items/${itemId}/workbook/worksheets/${worksheet}/tables/${table}`;

  return axios
    .get(url, config)
    .then((response) => response)
    .catch((err) => {
      return (
        err?.response ?? { status: 500, data: { message: 'An error occured' } }
      );
    });
};

exports.updateTable = (itemId, worksheet, table, data) => {
  const url = `https://graph.microsoft.com/v1.0/me/drive/items/${itemId}/workbook/worksheets/${worksheet}/tables/${table}`;

  return axios
    .patch(url, data, config)
    .then((response) => response)
    .catch((err) => {
      return (
        err?.response ?? { status: 500, data: { message: 'An error occured' } }
      );
    });
};

exports.deleteTable = (itemId, worksheet, table) => {
  const url = `https://graph.microsoft.com/v1.0/me/drive/items/${itemId}/workbook/worksheets/${worksheet}/tables/${table}`;

  return axios
    .delete(url, config)
    .then((response) => response)
    .catch((err) => {
      return (
        err?.response ?? { status: 500, data: { message: 'An error occured' } }
      );
    });
};

exports.getRows = (itemId, worksheet, table) => {
  const url = `https://graph.microsoft.com/v1.0/me/drive/items/${itemId}/workbook/worksheets/${worksheet}/tables/${table}/rows`;

  return axios
    .get(url, config)
    .then((response) => response)
    .catch((err) => {
      return (
        err?.response ?? { status: 500, data: { message: 'An error occured' } }
      );
    });
};

exports.addRow = (itemId, worksheet, table, data) => {
  const url = `https://graph.microsoft.com/v1.0/me/drive/items/${itemId}/workbook/worksheets/${worksheet}/tables/${table}/rows`;

  return axios
    .post(url, data, config)
    .then((response) => response)
    .catch((err) => {
      return (
        err?.response ?? { status: 500, data: { message: 'An error occured' } }
      );
    });
};

exports.getRow = (itemId, worksheet, table, index) => {
  const url = `https://graph.microsoft.com/v1.0/me/drive/items/${itemId}/workbook/worksheets/${worksheet}/tables/${table}/rows/itemAt(index=${index})`;

  return axios
    .get(url, config)
    .then((response) => response)
    .catch((err) => {
      return (
        err?.response ?? { status: 500, data: { message: 'An error occured' } }
      );
    });
};

exports.updateRow = (itemId, worksheet, table, index, data) => {
  const url = `https://graph.microsoft.com/v1.0/me/drive/items/${itemId}/workbook/worksheets/${worksheet}/tables/${table}/rows/itemAt(index=${index})`;

  return axios
    .patch(url, data, config)
    .then((response) => response)
    .catch((err) => {
      return (
        err?.response ?? { status: 500, data: { message: 'An error occured' } }
      );
    });
};

exports.deleteRow = (itemId, worksheet, table, index) => {
  const url = `https://graph.microsoft.com/v1.0/me/drive/items/${itemId}/workbook/worksheets/${worksheet}/tables/${table}/rows/itemAt(index=${index})`;

  return axios
    .delete(url, config)
    .then((response) => response)
    .catch((err) => {
      return (
        err?.response ?? { status: 500, data: { message: 'An error occured' } }
      );
    });
};
