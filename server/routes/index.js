'use strict';
const router = require('express').Router();
module.exports = router;

router.use('/tasks', require('./tasks'));
