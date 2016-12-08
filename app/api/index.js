const express = require('express');
const app = express();
const number = require('./number/number');

app.use('/number', number);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

module.exports = app;
