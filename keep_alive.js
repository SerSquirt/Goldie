var http = require('http');

http.createServer(function (req, res) {
  res.write("Meow! Goldie is running!");
  res.end();
}).listen(8080);