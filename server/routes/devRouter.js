'use strict';

const router = require('express').Router();
const { get, post } = require('../controllers/devController');

router.get('/', get);
router.post('/', post);

module.exports = router;
