'use strict';

const db = require('../db');

const devSchema = db.Schema({
  name: String,
  age: Number,
  lang: String,
  email: String,
});

module.exports = db.model('Dev', devSchema);
