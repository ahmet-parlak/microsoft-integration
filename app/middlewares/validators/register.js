const { body } = require('express-validator');
const User = require.main.require('./models/User');

const minPassLength = process.env.MIN_PASS_LENGTH ?? 6;

module.exports = [
  body('username').trim().notEmpty().withMessage('Please enter your username!'),
  body('username').custom(async (value) => {
    const user = await User.findOne({ username: value });
    if (user) throw new Error('Username is taken!');
  }),
  body('password')
    .isLength({ min: minPassLength })
    .withMessage(
      `Please create a strong password at least ${minPassLength} characters!`
    ),
  body('confirm_password')
    .custom((value, { req }) => {
      return value === req.body.password;
    })
    .withMessage('Passwords do not match!'),
];
