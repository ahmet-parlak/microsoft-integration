const authService = require.main.require('./services/Microsoft/auth');

module.exports = (req, res, next) => {
  const token = req.user.microsoftToken;

  authService.setToken(token);
  next();
};
