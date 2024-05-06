const { getValidationErrors } = require('../helpers/validator');

module.exports = (req, res, next) => {
  const validationErrs = getValidationErrors(req);

  if (validationErrs.length > 0) {
    const data = {
      status: 'error',
      message: 'bad request',
      error_messages: validationErrs,
    };
    return res.status(400).json(data);
  }

  next();
};
