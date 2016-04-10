'use strict';

const mongoose = require('mongoose');

import { green, yellow, red } from 'colors/safe';
import key from './key';

// const localUri = `mongodb://localhost/playground`;

// mongoose.connect(localUri, () => {
//   console.log(green.bold(`Mongodb connected`));
// });

// module.exports = mongoose;

const options = {
  server: {
    socketOptions: {
      keepAlive: 300000,
      connectTimeoutMS: 30000
    }
  },
  replset: {
    socketOptions: {
      keepAlive: 300000,
      connectTimeoutMS : 30000
    }
  },
  promiseLibrary: require('bluebird'),
  user: key.user,
  pass: key.pw
};

const mongodbUri = key.url;

const conn = mongoose.createConnection(mongodbUri, options);

conn.on('error', console.error.bind(console, 'connection error:'));

conn.once('open', function() {
  console.log(green.bold(`Mongodb connected.`));
});

module.exports = conn;
