const calendarService = require.main.require('./services/Microsoft/calendar');

exports.getAll = async (req, res) => {
  const calendars = await calendarService.getCalendars();
  return res.json(calendars);
};

exports.get = async (req, res) => {
  const id = req.params.id;

  const calendar = await calendarService.getCalendar(id);

  res.json(calendar);
};

exports.post = async (req, res) => {
  const name = req.body.name;

  const calendar = await calendarService.createCalendar(name);

  res.json(calendar);
};

exports.patch = async (req, res) => {
  const id = req.params.id;
  const name = req.body.name;

  const calendar = await calendarService.patchCalendar(id, name);

  res.json(calendar);
};

exports.delete = async (req, res) => {
  const id = req.params.id;

  const status = await calendarService.deleteCalendar(id);
  res.status(status).json();
};
