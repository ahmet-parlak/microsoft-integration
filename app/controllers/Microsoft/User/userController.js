const userService = require.main.require('./services/Microsoft/user');

exports.get = async (req, res) => {
  const user = await userService.getUser();
  res.json(user);
};
