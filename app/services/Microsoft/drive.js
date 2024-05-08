const axios = require('axios');
const { config } = require('./auth');

exports.getDrive = async () => {
  return axios
    .get('https://graph.microsoft.com/v1.0/me/drive', config)
    .then((response) => response)
    .catch((err) => {
      console.log(err);
      return (
        err?.response ?? { status: 500, data: { message: 'An error occured' } }
      );
    });
};

exports.getRoot = async () => {
  return axios
    .get('https://graph.microsoft.com/v1.0/me/drive/root', config)
    .then((response) => response)
    .catch((err) => {
      console.log(err);
      return (
        err?.response ?? { status: 500, data: { message: 'An error occured' } }
      );
    });
};

exports.getChildren = async (item_id) => {
  const url = `https://graph.microsoft.com/v1.0/me/drive/items/${item_id}/children`;

  return axios
    .get(url, config)
    .then((response) => response)
    .catch((err) => {
      console.log(err);
      return (
        err?.response ?? { status: 500, data: { message: 'An error occured' } }
      );
    });
};

exports.createFolder = async (item_id, folder_name) => {
  const url = `https://graph.microsoft.com/v1.0/me/drive/items/${item_id}/children`;

  const folder = {
    name: folder_name,
    folder: {},
    '@microsoft.graph.conflictBehavior': 'rename',
  };

  return axios
    .post(url, folder, config)
    .then((response) => response)
    .catch((err) => {
      console.log(err);
      return (
        err?.response ?? { status: 500, data: { message: 'An error occured' } }
      );
    });
};

exports.upload = async (file) => {
  const url = `https://graph.microsoft.com/v1.0/me/drive/items/${file.location}:/${file.name}:/content`;

  config.headers['Content-Type'] = 'text/plain';

  return axios
    .put(url, file.data, config)
    .then((response) => response)
    .catch((err) => {
      if (!err?.response) console.log(err);
      return (
        err?.response ?? {
          status: 500,
          data: { message: 'An error occured' },
        }
      );
    });
};

exports.deleteItem = async (item_id) => {
  const url = `https://graph.microsoft.com/v1.0/me/drive/items/${item_id}`;

  return axios
    .delete(url, config)
    .then((response) => response)
    .catch((err) => {
      console.log(err);
      return (
        err?.response ?? { status: 500, data: { message: 'An error occured' } }
      );
    });
};

exports.search = async (q) => {
  const url = `https://graph.microsoft.com/v1.0/me/drive/search(q='${q}')`;

  return axios
    .get(url, config)
    .then((response) => response)
    .catch((err) => {
      console.log(err);
      return (
        err?.response ?? { status: 500, data: { message: 'An error occured' } }
      );
    });
};
