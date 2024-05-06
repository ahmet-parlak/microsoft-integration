const User = require('../models/User');
const jwt = require('../helpers/jwt');
const bcrypt = require('bcrypt');

exports.register = (req, res) => {
  User.create(req.body)
    .then((user) => {
      user = {
        id: user.id,
        username: user.username,
        microsoftToken: user.microsoftToken,
        createdAt: user.created_at,
      };
      const token = jwt.create(user);
      const data = {
        status: 'success',
        message: 'You have successfully registered.',
        token,
      };
      res.status(200).json(data);
    })
    .catch((err) => {
      console.log(err);
      const data = {
        status: 'error',
        message: 'Somethings wrong. Please try again.',
      };
      res.status(500).json(data);
    });
};

exports.login = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  User.findOne({ username })
    .then((user) => {
      if (!bcrypt.compareSync(password, user.password)) {
        const data = {
          status: 'error',
          message: 'username and password do not match!',
        };
        return res.status(400).json(data);
      }

      user = {
        id: user.id,
        username: user.username,
        microsoftToken: user.microsoftToken,
        createdAt: user.created_at,
      };
      const token = jwt.create(user);
      const data = {
        status: 'success',
        message: 'You have successfully logged in!',
        token,
      };
      res.status(200).json(data);
    })
    .catch((err) => {
      console.log(err);
      const data = {
        status: 'error',
        message: 'Somethings wrong. Please try again.',
      };
      res.status(500).json(data);
    });
};
