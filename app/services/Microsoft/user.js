const axios = require('axios');
const { config } = require('./auth');

exports.getUser = async () => {
  return axios
    .get('https://graph.microsoft.com/v1.0/me', config)
    .then((response) => response)
    .catch((err) => {
      return (
        err?.response ?? { status: 500, data: { message: 'An error occured' } }
      );
    });
};
