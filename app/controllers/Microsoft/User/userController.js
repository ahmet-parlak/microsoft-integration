const userService = require.main.require('./services/Microsoft/user');

exports.get = async (req, res) => {
  const serviceRes = await userService.getUser();

  res.status(serviceRes.status).json(serviceRes.data);
};
