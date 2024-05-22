const axios = require('axios');
const { config } = require('./auth');

exports.getMessages = async () => {
  return axios
    .get('https://graph.microsoft.com/v1.0/me/messages', config)
    .then((response) => response)
    .catch((err) => {
      return (
        err?.response ?? { status: 500, data: { message: 'An error occured' } }
      );
    });
};

exports.sendMail = async (message) => {
  config.headers['Content-Type'] = 'application/json';
  return axios
    .post('https://graph.microsoft.com/v1.0/me/sendMail', message, config)
    .then((response) => response)
    .catch((err) => {
      return (
        err?.response ?? { status: 500, data: { message: 'An error occured' } }
      );
    });
};

exports.getMessage = async (id) => {
  return axios
    .get(`https://graph.microsoft.com/v1.0/me/messages/${id}`, config)
    .then((response) => response)
    .catch((err) => {
      return (
        err?.response ?? { status: 500, data: { message: 'An error occured' } }
      );
    });
};

exports.deleteMessage = async (id) => {
  return axios
    .delete(`https://graph.microsoft.com/v1.0/me/messages/${id}`, config)
    .then((response) => response)
    .catch((err) => {
      return (
        err?.response ?? { status: 500, data: { message: 'An error occured' } }
      );
    });
};
