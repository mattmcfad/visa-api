'use strict';

const router = require('express').Router();
const { get, post } = require('../controllers/creditController');

router.get('/', get);
router.post('/', post);

module.exports = router;
