var api = require('./app/api/');

var port = process.env.PORT || 3000;

api.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
