const axios = require('axios');
const constants = require('../../constants');
const config = {
  headers: {},
};

exports.refreshToken = async (refresh_token) => {
  const url = `https://login.microsoftonline.com/consumers/oauth2/v2.0/token`;
  const params = new URLSearchParams();
  params.append('client_id', process.env.CLIENT_ID);
  params.append('redirect_uri', process.env.REDIRECT_URI);
  params.append('scope', constants.scopes.join());
  params.append('refresh_token', refresh_token);
  params.append('grant_type', 'refresh_token');
  params.append('client_secret', process.env.CLIENT_SECRET);

  return await axios
    .post(url, params)
    .then(async (response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
      return null;
    });
};

exports.setToken = (token) => {
  config.headers['Authorization'] = `Bearer ${token.access_token}`;
};

exports.config = config;
