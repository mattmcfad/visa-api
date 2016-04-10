'use strict';

const router = require('express').Router();
const controller = require('../controllers/testController');

router.get('/', controller.get);
router.post('/', controller.post);

module.exports = router;
