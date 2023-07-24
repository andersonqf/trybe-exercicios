const express = require('express');
const router = express.Router();

const peopleRouter = require('./router/people.router');
const tasksRouter = require('./router/tasks.router');

router.use(peopleRouter);
router.use(tasksRouter);

module.exports = router;