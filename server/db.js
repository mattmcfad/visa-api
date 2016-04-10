'use strict';

// import key from './key';
// const uri = `mongodb://${key.user}:${key.pw}@${key.url}`;

const mongoose = require('mongoose');
import { green, red } from 'colors/safe';

mongoose.connect('mongodb://localhost/playground', () => {
  console.log(green.bold(`Mongodb connected`));
});

module.exports = mongoose;
