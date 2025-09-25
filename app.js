const http = require('http');
const port = 8080;
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello from Dockerized Jenkins Pipeline!1');
});
server.listen(port);
