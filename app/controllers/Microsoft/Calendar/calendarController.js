const calendarService = require.main.require('./services/Microsoft/calendar');

exports.getAll = async (req, res) => {
  const serviceRes = await calendarService.getCalendars();
  res.status(serviceRes.status).json(serviceRes.data);
};

exports.get = async (req, res) => {
  const id = req.params.id;

  const serviceRes = await calendarService.getCalendar(id);

  res.status(serviceRes.status).json(serviceRes.data);
};

exports.post = async (req, res) => {
  const name = req.body.name;

  const serviceRes = await calendarService.createCalendar(name);

  res.status(serviceRes.status).json(serviceRes.data);
};

exports.patch = async (req, res) => {
  const id = req.params.id;
  const name = req.body.name;

  const serviceRes = await calendarService.patchCalendar(id, name);

  res.status(serviceRes.status).json(serviceRes.data);
};

exports.delete = async (req, res) => {
  const id = req.params.id;

  const serviceRes = await calendarService.deleteCalendar(id);

  res.status(serviceRes.status).json(serviceRes.data);
};
