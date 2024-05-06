const jwt = require('../helpers/jwt');
const User = require('../models/User');
module.exports = async (req, res, next) => {
  let header = req?.headers?.authorization;
  const token = header && header.split(' ')[1];

  if (token == null) return res.status(401).json({ message: 'Unauthorized' });
  try {
    const userDecoded = jwt.verify(token);
    const user = await User.findById(userDecoded.id)
      .then((user) => user)
      .catch((err) => {
        console.log(err);
        return userDecoded;
      });
    if (!user) return res.status(401).json({ message: 'Unauthorized' });
    req.user = user;
    next();
  } catch (error) {
    let message;
    switch (error.name) {
      case 'TokenExpiredError':
        message = 'Token Expired';
        break;

      default:
        console.log(error);
        message = 'Authentication Error';
        break;
    }

    return res.status(403).json({ status: 'error', message });
  }
};
