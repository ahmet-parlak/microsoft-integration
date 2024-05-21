const mailService = require.main.require('./services/Microsoft/mail');

exports.getMessages = async (req, res) => {
  const serviceRes = await mailService.getMessages();

  res.status(serviceRes.status).json(serviceRes.data);
};

exports.sendMail = async (req, res) => {
  const mailData = req.body;

  const serviceRes = await mailService.sendMail(mailData);

  res.status(serviceRes.status).json(serviceRes.data);
};

exports.getMessage = async (req, res) => {
  const id = req.params.id;

  const serviceRes = await mailService.getMessage(id);

  res.status(serviceRes.status).json(serviceRes.data);
};

exports.deleteMessage = async (req, res) => {
  const id = req.params.id;

  const serviceRes = await mailService.deleteMessage(id);

  res.status(serviceRes.status).json(serviceRes.data);
};
