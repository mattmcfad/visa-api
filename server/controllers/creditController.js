'use strict';

import { yellow, red, green } from 'colors/safe';

const Credit = require('../models/charge');

export const get = function (req, res) {

  Credit
    .find()
    // .sort('id')
    .exec()
    .then(charges => {
      return res.status(200).json(charges);
    })
    .catch(err => {
      console.error(red.bold(`Error: ${err}`));
      return res.status(500);
    });
};

export const post = function(req, res) {

  const charges = req.body.charges || [];

  let bulkCharges = [];

  if (charges && charges.length > 0) {
    charges.forEach((charge, index) => {
      // http://stackoverflow.com/questions/24466366/mongoose-rangeerror-maximum-call-stack-size-exceeded
      bulkCharges.push({
        id: charge.id,
        date: charge.date,
        description: charge.description,
        category: charge.category,
        credit: charge.credit,
        debit: charge.debit,
        balance: charge.balance
      });
    });

    Credit.collection.insert(bulkCharges)
      .then(charges => {
        return res.status(201).json(charges.ops);
      })
      .catch(err => {
        console.error(red.bold(`Mongo Error: ${err}`));
        return res.status(500).send(`Mongo Error: ${err}`)
      });
  } else {
    res.status(400).send('Error: no charges');
  }
};
