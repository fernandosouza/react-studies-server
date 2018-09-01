const http = require('http');
const server = http.createServer();
const routers = require('./routers');

server.on('request', (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  
  if (request.url === '/topic' && request.method === 'POST') {
    routers.post.insertTopic(request, response);
  }
  else if (request.url === '/topic' && request.method === 'GET') {
    routers.get.getTopics(request, response);
  }
  else {
    response.end();
  }
});

server.listen(8443);

module.exports = server;