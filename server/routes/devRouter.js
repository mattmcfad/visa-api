'use strict';

const router = require('express').Router();
const controller = require('../controllers/devController');

router.get('/', controller.get);
router.post('/', controller.post);

module.exports = router;
