'use strict';

const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const port = process.env.PORT || 8000;

import { green, red } from 'colors/safe';

app.use(bodyParser.json());
app.use(morgan('dev'));

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

  // intercept OPTIONS method
  if ('OPTIONS' === req.method) {
    return res.status(200).send('no opts');
  }
  next();
});

require('./routes')(app);

app.listen(port, () => {
  console.log(green.bold(`Server running on port ${port}`));
});
