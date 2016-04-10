'use strict';

const mongoose = require('mongoose');
const db = require('../db');

const devSchema = mongoose.Schema({
  name: String,
  age: Number,
  lang: String,
  email: String,
});

module.exports = db.model('Dev', devSchema);
