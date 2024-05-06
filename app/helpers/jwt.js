const jwt = require('jsonwebtoken');
const jwt_secret = process.env.JWT_SECRET;
const expiresIn = process.env.JWT_EXPIRES_IN ?? '10h';

exports.create = (user) => {
  return jwt.sign(user, jwt_secret, { expiresIn });
};

exports.verify = (token) => {
  if (jwt.verify(token, jwt_secret)) return jwt.decode(token);
  throw new Error('Invalid Token');
};
