const User = require('../models/User');

module.exports = async (req, res, next) => {
  const username = req.body?.username ?? null;

  const user = await User.findOne({ username })
    .then((user) => user)
    .catch((err) => {
      console.log(err);
      return null;
    });
  if (user) {
    return next();
  }
  res.status(401).json({ message: 'Username and password do not match!' });
};
