'use strict';

import { yellow, red, green } from 'colors/safe';

const Dev = require('../models/dev');

const controller = {};

controller.get = function(req, res) {
  console.log(yellow.bold(`Getting users`));

  Dev.find((err, devs) => {
    if (err) {
      console.error(red.bold(`${err} sorry!`));
      res.status(500).send(`${err} sorry!`);
    }

    console.log(green.bold(`Found users: ${devs}`));
    res.status(200).json(devs);
  });
};

controller.post = function(req, res) {
  console.log(yellow.bold(`Posting new users`));
  console.log(yellow.bold(`
    name: ${req.body.name}, age: ${req.body.age}
    lang: ${req.body.lang} email: ${req.body.email}
  `));

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

    console.log(green.bold(`Created Dev: ${newDev}`));

    res.status(200).json(newDev);
  })

};

module.exports = controller;