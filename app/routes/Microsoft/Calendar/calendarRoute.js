const express = require('express');

const validationMiddleware = require.main.require('./middlewares/validation');
const calendarValidator = require.main.require(
  './middlewares/validators/calendar/calendar'
);
const eventValidator = require.main.require(
  './middlewares/validators/calendar/event'
);
const microsoftAuthMiddleware = require.main.require(
  './middlewares/Microsoft/auth'
);
const microsoftServiceMiddleware = require.main.require(
  './middlewares/Microsoft/service'
);
const calendarController = require.main.require(
  './controllers/Microsoft/Calendar/calendarController'
);
const eventController = require.main.require(
  './controllers/Microsoft/Calendar/eventController'
);

const router = express.Router();

router.all('/*', microsoftAuthMiddleware, microsoftServiceMiddleware);

router.get('/', calendarController.getAll);
router.get('/events', eventController.getEvents);
router.post(
  '/',
  calendarValidator,
  validationMiddleware,
  calendarController.post
);

router.post(
  '/events',
  eventValidator,
  validationMiddleware,
  eventController.post
);

router.get('/:id', calendarController.get);
router.patch('/:id', calendarController.patch);
router.delete('/:id', calendarController.delete);

router.get('/events/:id', eventController.getEvent);
router.delete('/events/:id', eventController.delete);
router.patch(
  '/events/:id',
  eventValidator,
  validationMiddleware,
  eventController.patch
);
router.get('/:id/events', eventController.getCalendarEvents);
router.post(
  '/:id/events',
  eventValidator,
  validationMiddleware,
  eventController.postCalendarEvents
);
router.get('/:calendar_id/events/:event_id', eventController.getCalendarEvent);

module.exports = router;
