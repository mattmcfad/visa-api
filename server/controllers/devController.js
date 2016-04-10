'use strict';

import { yellow, red, green } from 'colors/safe';

const Dev = require('../models/dev');

export const get = function (req, res) {

  Dev
    .find()
    .sort('age')
    .exec()
    .then((devs, err) => {
      if (err) {
        console.error(red.bold(`Error: ${err}`));
        res.status(500);
      }

      res.status(200).json(devs);
    });
};

export const post = function(req, res) {

  const dev = new Dev({
    name: req.body.name,
    age: req.body.age,
    lang: req.body.lang,
    email: req.body.email
  });

  dev
    .save()
    .then((newDev, err) => {
      if (err) {
        console.error(red.bold(`Mongo Error: ${err}`));
        res.status(500).send(`Mongo Error: ${err}`);
      }

      console.log(green.bold(`Created Dev: ${newDev}`));
      res.status(200).json(newDev);
    });
};
