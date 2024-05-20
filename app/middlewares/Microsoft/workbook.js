const workbookService = require.main.require('./services/Microsoft/workbook');

module.exports = (req, res, next) => {
  const sessionId = req.headers['workbook-session-id'];
  workbookService.setSessionId(sessionId);
  next();
};
