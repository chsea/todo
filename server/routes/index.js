'use strict';
const router = require('express').Router();
module.exports = router;

router.use('/users', require('./users'));
router.use('/tasks', require('./tasks'));
