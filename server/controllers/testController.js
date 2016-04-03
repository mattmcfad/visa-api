'use strict';

let mock = function (req, res) {
  res.send(200, 'test');
};

exports.mock = mock;