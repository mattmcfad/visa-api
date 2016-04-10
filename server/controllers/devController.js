'use strict';

import { yellow, red, green } from 'colors/safe';

const Dev = require('../models/dev');

const controller = {};

controller.get = function(req, res) {

  Dev.find((err, devs) => {
    if (err) {
      console.error(red.bold(`${err} sorry!`));
      res.status(500);
    }

    res.status(200).json(devs);
  });

};

controller.post = function(req, res) {

  const dev = new Dev({
    name: req.body.name,
    age: req.body.age,
    lang: req.body.lang,
    email: req.body.email
  });

  dev.save((err, newDev) => {
    if (err) {
      console.error(red.bold(`Mongo Error: ${err}`));
      res.status(500).send(`Mongo Error: ${err}`);
    }

    res.status(200).json(newDev);
    console.log(green.bold(`Created Dev: ${newDev}`));
  })

};

module.exports = controller;
