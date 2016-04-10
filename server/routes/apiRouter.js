'use strict';

const router = require('express').Router();

const testRouter = require('./devRouter');

router.get('/', function (req, res) {
  return res.status(200).send('VISA api v1');
});

router.use('/test', testRouter);

module.exports = router;
