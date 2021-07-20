const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello from ' + process.env.APP_NAME);
}

const server = http.createServer(requestListener);
server.listen(8080);
