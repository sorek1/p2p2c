const http = require('http');

const server = http.createServer((req, res) => {
  res.end('This is a Node.js server running on Now 2.0');
});

server.listen();
