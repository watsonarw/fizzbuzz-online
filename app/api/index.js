const express = require('express');
const app = express();
const number = require('./number/number');
const solve = require('./solve/solve');

app.use('/number', number);

app.use('/solve', solve);

app.use((err, req, res, then) => {
  if (err) {
    res.status(500);
    res.json({ error: "Internal Error" });
  }
});

module.exports = app;
