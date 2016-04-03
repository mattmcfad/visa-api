'use strict';

const router = require('express').Router();
const controller = require('../controllers/testController');

router.get('/', controller.mock);

module.exports = router;