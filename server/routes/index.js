'use strict';

const apiRouter = require('./apiRouter');

module.exports = function router(app) {
  app.use('/api/v1', apiRouter);
};