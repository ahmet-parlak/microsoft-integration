const axios = require('axios');
const User = require.main.require('./models/User');
const microsoftAuthService = require.main.require('./services/Microsoft/auth');
const constants = require.main.require('./constants');
const scope = constants.scopes.join();

exports.oauth2 = (req, res) => {
  const state = req?.query?.state ?? '';
  const url = `https://login.microsoftonline.com/consumers/oauth2/v2.0/authorize?client_id=${process.env.CLIENT_ID}&response_type=code&redirect_uri=${process.env.REDIRECT_URI}&response_mode=query&scope=${scope}&state=${state}`;

  res.json({ status: 'success', redirect_url: url });
};

exports.oauth2Redirect = async (req, res) => {
  if (req.body.access_token) {
    res.redirect(req?.query?.state ?? '/');
  } else {
    const code = req.query?.code ?? '';
    const url = `https://login.microsoftonline.com/consumers/oauth2/v2.0/token`;
    const params = new URLSearchParams();
    params.append('client_id', process.env.CLIENT_ID);
    params.append('redirect_uri', process.env.REDIRECT_URI);
    params.append('scope', 'user.read');
    params.append('code', code);
    params.append('grant_type', 'authorization_code');
    params.append('client_secret', process.env.CLIENT_SECRET);

    await axios
      .post(url, params)
      .then(async (response) => {
        const token = response.data;

        await User.findOne({ username: req.user.username })
          .then((user) => {
            user.microsoftToken = token;
            user.save();
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((error) => {
        console.error(error);
        res.send('Somethings are wrong');
      });

    res.redirect(req?.query?.state ?? '/');
  }
};

exports.oauth2RefreshToken = async (req, res) => {
  const token = await microsoftAuthService.refreshToken(
    req.user.microsoftToken.refresh_token
  );

  if (token) {
    await User.findOne()
      .then((user) => {
        user.microsoftToken = token;
        user.save();
        req.user = user;
      })
      .catch((err) => {
        console.log(err);
      });
  }
};
