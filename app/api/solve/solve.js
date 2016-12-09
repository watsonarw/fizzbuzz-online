const express = require('express');
const solve = express();

const SolveFizzBuzz = require('../../SolveFizzBuzz/SolveFizzBuzz');
const InvalidNumber = require('../../exceptions').InvalidNumber;

solve.get('/from/:first/to/:last', (req, res) => {
  const first = req.params.first,
    last = req.params.last;

  res.status(200);
  res.json(SolveFizzBuzz(first, last));
});

solve.get('/', (req, res) => {
  res.status(200);
  res.json(SolveFizzBuzz(1, 100));
});

solve.use(handleInvalidInput);

function handleInvalidInput(err, req, res, then) {
  if(err instanceof InvalidNumber) {
    res.status(400)
    res.json({ error: err.message });
  } else {
    then(err);
  }
}


module.exports = solve;
