const calendarService = require.main.require('./services/Microsoft/calendar');

exports.getEvents = async (req, res) => {
  const events = await calendarService
    .getEvents()
    .then((events) => events)
    .catch((err) => {
      console.log(err);
      return null;
    });

  res.json(events);
};

exports.getEvent = async (req, res) => {
  const id = req.params.id;

  const event = await calendarService
    .getEvent(id)
    .then((event) => event)
    .catch((err) => {
      console.log(err);
      return null;
    });

  res.json(event);
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

  const event = await calendarService
    .createEvent(eventData)
    .then((event) => event)
    .catch((err) => {
      console.log(err);
      return null;
    });
  return res.json(event);
};

exports.getCalendarEvents = async (req, res) => {
  const id = req.params.id;

  const events = await calendarService.getCalendarEvents(id);

  res.json(events);
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

  const event = await calendarService
    .createCalendarEvent(id, eventData)
    .then((event) => event)
    .catch((err) => {
      console.log(err);
      return null;
    });
  return res.json(event);
};

exports.getCalendarEvent = async (req, res) => {
  const calendar_id = req.params.calendar_id;
  const event_id = req.params.event_id;

  const event = await calendarService.getCalendarEvent(calendar_id, event_id);

  res.json(event);
};

exports.delete = async (req, res) => {
  const id = req.params.id;

  const status = await calendarService.deleteEvent(id);
  res.status(status).json();
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

  const event = await calendarService
    .patchEvent(id, eventData)
    .then((event) => event)
    .catch((err) => {
      console.log(err);
      return null;
    });
  return res.json(event);
};
