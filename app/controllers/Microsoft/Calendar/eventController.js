const calendarService = require.main.require('./services/Microsoft/calendar');

exports.getEvents = async (req, res) => {
  const serviceRes = await calendarService.getEvents();

  res.status(serviceRes.status).json(serviceRes.data);
};

exports.getEvent = async (req, res) => {
  const id = req.params.id;

  const serviceRes = await calendarService.getEvent(id);

  res.status(serviceRes.status).json(serviceRes.data);
};

exports.post = async (req, res) => {
  const subject = req.body.subject ?? 'subjecet-n';
  const start = req.body.start ?? '';
  const end = req.body.end ?? '';
  const isAllDay = req.body.isAllDay ?? 'false';

  const eventData = {
    subject,
    start: {
      dateTime: start,
      timeZone: 'Turkey Standard Time',
    },
    end: {
      dateTime: end,
      timeZone: 'Turkey Standard Time',
    },
    isAllDay,
  };

  if (start == '') {
    delete eventData.start;
    eventData.isAllDay = 'false';
  }
  if (end == '') delete eventData.end;

  const serviceRes = await calendarService.createEvent(eventData);

  res.status(serviceRes.status).json(serviceRes.data);
};

exports.getCalendarEvents = async (req, res) => {
  const id = req.params.id;

  const serviceRes = await calendarService.getCalendarEvents(id);

  res.status(serviceRes.status).json(serviceRes.data);
};

exports.postCalendarEvents = async (req, res) => {
  const id = req.params.id;
  const subject = req.body.subject ?? 'subjecet-n';
  const start = req.body.start ?? '';
  const end = req.body.end ?? '';
  const isAllDay = req.body.isAllDay ?? 'false';

  const eventData = {
    subject,
    start: {
      dateTime: start,
      timeZone: 'Turkey Standard Time',
    },
    end: {
      dateTime: end,
      timeZone: 'Turkey Standard Time',
    },
    isAllDay,
  };

  if (start == '') {
    delete eventData.start;
    eventData.isAllDay = 'false';
  }
  if (end == '') delete eventData.end;

  const serviceRes = await calendarService.createCalendarEvent(id, eventData);

  res.status(serviceRes.status).json(serviceRes.data);
};

exports.getCalendarEvent = async (req, res) => {
  const calendar_id = req.params.calendar_id;
  const event_id = req.params.event_id;

  const serviceRes = await calendarService.getCalendarEvent(
    calendar_id,
    event_id
  );

  res.status(serviceRes.status).json(serviceRes.data);
};

exports.delete = async (req, res) => {
  const id = req.params.id;

  const serviceRes = await calendarService.deleteEvent(id);
  res.status(serviceRes.status).json(serviceRes.data);
};

exports.patch = async (req, res) => {
  const id = req.params.id;
  const subject = req.body.subject;
  const start = req.body.start?.trim() ?? '';
  const end = req.body.end?.trim() ?? '';
  const isAllDay = req.body.isAllDay?.trim() ?? '';

  const eventData = {
    subject,
    start: {
      dateTime: start,
      timeZone: 'Turkey Standard Time',
    },
    end: {
      dateTime: end,
      timeZone: 'Turkey Standard Time',
    },
    isAllDay,
  };

  if (subject.length < 1) delete eventData.end;

  if (start.length < 1) {
    delete eventData.start;
    eventData.isAllDay = 'false';
  }
  if (end.length < 1) delete eventData.end;
  if (isAllDay.length < 1) delete eventData.end;

  const serviceRes = await calendarService.patchEvent(id, eventData);

  res.status(serviceRes.status).json(serviceRes.data);
};
