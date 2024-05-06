const mailService = require.main.require('./services/Microsoft/mail');

exports.getMessages = async (req, res) => {
  const messages = await mailService.getMessages();

  res.json(messages);
};

exports.sendMail = async (req, res) => {
  const mailData = req.body;
  const mail = await mailService.sendMail(mailData);

  res.status(mail.status).json(mail?.data ?? {});
};

exports.getMessage = async (req, res) => {
    const id = req.params.id;
    const response = await mailService.getMessage(id);
  
    res.status(response.status).json(response?.data);
  };

exports.deleteMessage = async (req, res) => {
  const id = req.params.id;
  const response = await mailService.deleteMessage(id);

  res.status(response.status).json(response?.data);
};
