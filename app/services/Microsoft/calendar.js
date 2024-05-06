const axios = require('axios');
const { config } = require('./auth');

exports.getCalendars = async () => {
  const url = 'https://graph.microsoft.com/v1.0/me/calendars';

  return axios
    .get(url, config)
    .then((response) => response.data)
    .catch((err) => {
      console.log(err?.response?.data ?? err);
      return null;
    });
};

exports.getCalendar = async (id) => {
  const url = `https://graph.microsoft.com/v1.0/me/calendars/${id}`;

  return axios
    .get(url, config)
    .then((response) => response.data)
    .catch((err) => {
      console.log(err?.response?.data ?? err);
      return null;
    });
};

exports.getEvents = async () => {
  const url = 'https://graph.microsoft.com/v1.0/me/calendar/events';

  return axios
    .get(url, config)
    .then((response) => response.data)
    .catch((err) => {
      console.log(err?.response?.data ?? err);
      return null;
    });
};

exports.getEvent = async (id) => {
  const url = `https://graph.microsoft.com/v1.0/me/calendar/events/${id}`;

  return axios
    .get(url, config)
    .then((response) => response.data)
    .catch((err) => {
      console.log(err?.response?.data ?? err);
      return null;
    });
};

exports.getCalendarEvents = (id) => {
  const url = `https://graph.microsoft.com/v1.0/me/calendars/${id}/events`;

  return axios
    .get(url, config)
    .then((response) => response.data)
    .catch((err) => {
      console.log(err?.response?.data ?? err);
      return null;
    });
};

exports.getCalendarEvent = (calendar_id, event_id) => {
  const url = `https://graph.microsoft.com/v1.0/me/calendars/${calendar_id}/events/${event_id}`;

  return axios
    .get(url, config)
    .then((response) => response.data)
    .catch((err) => {
      console.log(err?.response?.data ?? err);
      return null;
    });
};

exports.createCalendar = async (name) => {
  const url = 'https://graph.microsoft.com/v1.0/me/calendars';
  return axios
    .post(url, { name }, config)
    .then((response) => response.data)
    .catch((err) => {
      console.log(err?.response?.data ?? err);
      return null;
    });
};

exports.createEvent = async (event) => {
  const url = 'https://graph.microsoft.com/v1.0/me/calendar/events';
  return axios
    .post(url, event, config)
    .then((response) => response.data)
    .catch((err) => {
      console.log(err?.response?.data ?? err);
      return null;
    });
};
exports.createCalendarEvent = async (id, event) => {
  const url = `https://graph.microsoft.com/v1.0/me/calendars/${id}/events`;
  return axios
    .post(url, event, config)
    .then((response) => response.data)
    .catch((err) => {
      console.log(err?.response?.data ?? err);
      return null;
    });
};

exports.patchCalendar = async (id, name) => {
  const url = `https://graph.microsoft.com/v1.0/me/calendars/${id}`;
  return axios
    .patch(url, { name }, config)
    .then((response) => response.data)
    .catch((err) => {
      console.log(err?.response?.data ?? err);
      return null;
    });
};

exports.deleteCalendar = async (id) => {
  const url = `https://graph.microsoft.com/v1.0/me/calendars/${id}`;
  return axios
    .delete(url, config)
    .then((response) => response.status)
    .catch((err) => err?.response?.status ?? 500);
};

exports.deleteEvent = async (id) => {
  const url = `https://graph.microsoft.com/v1.0/me/events/${id}`;
  return axios
    .delete(url, config)
    .then((response) => response.status)
    .catch((err) => err?.response?.status ?? 500);
};

exports.patchEvent = async (id, event) => {
  const url = `https://graph.microsoft.com/v1.0/me/events/${id}`;
  return axios
    .patch(url, event, config)
    .then((response) => response.data)
    .catch((err) => err?.response?.status ?? 500);
};
