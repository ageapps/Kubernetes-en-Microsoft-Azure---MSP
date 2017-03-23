var os = require("os");
name = os.hostname();
var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('<h1>Hello World!</h1><p>Host: '+name+'</p>');
});

app.listen(8080, function () {
  console.log('Server listening on port 8080');
});
