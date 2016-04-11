'use strict';

const mongoose = require('mongoose');
const db = require('../db');

const chargeSchema = mongoose.Schema({
  id: Number,
  date: Date,
  description: String,
  category: String,
  credit: Number,
  debit: Number,
  balance: Number
});

module.exports = db.model('Credit', chargeSchema);
