const axios = require('axios');
const { config } = require('./auth');

exports.getMessages = async () => {
  return axios
    .get('https://graph.microsoft.com/v1.0/me/messages', config)
    .then((response) => response.data)
    .catch((err) => {
      console.log(err);
      return err?.response?.data ?? null;
    });
};

exports.sendMail = async (message) => {
  return axios
    .post('https://graph.microsoft.com/v1.0/me/sendMail', message, config)
    .then((response) => response)
    .catch((err) => {
      return err?.response ?? { status: 500 };
    });
};

exports.getMessage = async (id) => {
  return axios
    .get(`https://graph.microsoft.com/v1.0/me/messages/${id}`, config)
    .then((response) => response)
    .catch((err) => {
      return err?.response ?? { status: 500 };
    });
};

exports.deleteMessage = async (id) => {
  return axios
    .delete(`https://graph.microsoft.com/v1.0/me/messages/${id}`, config)
    .then((response) => response)
    .catch((err) => {
      return err?.response ?? { status: 500 };
    });
};
