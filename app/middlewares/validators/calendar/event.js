const { body } = require('express-validator');

module.exports = [
  body('subject').notEmpty().withMessage('Please enter calendar name!'),
  body('start')
    .isISO8601()
    .optional({ nullable: true })
    .withMessage(
      'Start date must be in ISO8601 format (e.g., YYYY-MM-DDTHH:MM:SS)'
    ),
  body('end')
    .isISO8601()
    .optional({ nullable: true })
    .withMessage(
      'End date must be in ISO8601 format (e.g., YYYY-MM-DDTHH:MM:SS)'
    ),
  body('isAllDay')
    .isBoolean()
    .optional({ nullable: true })
    .withMessage('isAllDay field must be a boolean value (true or false)'),
];
