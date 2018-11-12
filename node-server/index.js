const http = require('http');

const server = http.createServer((req, res) => {
  res.end('This is a Node.js server running on lambda');
});

server.listen();
