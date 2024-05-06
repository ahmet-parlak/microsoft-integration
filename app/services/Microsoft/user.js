const axios = require('axios');
const { config } = require('./auth');

exports.getUser = async () => {
  return axios
    .get('https://graph.microsoft.com/v1.0/me', config)
    .then((response) => response.data)
    .catch((err) => {
      console.log(err);
      return err?.response?.data ?? null;
    });
};
