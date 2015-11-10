'use strict';
const _ = require('lodash');
const router = require('express').Router();
module.exports = router;
const User = require('../db').User;

router.get('/', (req, res, next) => {
  User.findAll(req.query)
    .then(users => res.json(users))
    .then(null, next);
});

router.post('/', (req, res, next) => {
  User.create(req.body)
    .then(user => res.json(user))
    .then(null, next);
});
