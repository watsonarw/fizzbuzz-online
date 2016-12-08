const express = require('express');
const number = express();

const FizzBuzz = require('../../FizzBuzz/FizzBuzz');
const InvalidInput = require('../../exceptions').InvalidInput;

number.get('/:number', (req, res) => {
  var number = req.params.number;
  res.status(200);
  res.json(FizzBuzz(number));
});

number.use(handleInvalidInput);

function handleInvalidInput(err, req, res, then) {
  if(err instanceof InvalidInput) {
    res.status(400)
    res.json({ error: err.message });
  } else {
    then(err);
  }
}


module.exports = number;
