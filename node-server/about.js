const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHeader(200, {"Content-Type": "text/html"});
  res.end('This is the About Page <hr> <a href="/">Navigate to Home</a>');
});

server.listen();
