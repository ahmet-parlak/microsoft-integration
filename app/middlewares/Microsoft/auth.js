const authController = require.main.require(
  './controllers/Microsoft/Auth/authController'
);

module.exports = async (req, res, next) => {
  if (req?.user?.microsoftToken) {
    const updatedAt = new Date(req.user.updated_at);
    const now = new Date();
    const expiresIn = req.user.microsoftToken.expires_in;
    updatedAt.setSeconds(updatedAt.getSeconds() + expiresIn);

    if (updatedAt < now) {
      await authController.oauth2RefreshToken(req, res);
    }

    next();
  } else {
    res.redirect(`/microsoft/auth/oauth2?state=${req.originalUrl}`);
  }
};
