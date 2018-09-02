const http = require('http');
const server = http.createServer();
const routers = require('./routers');

server.on('request', (request, response) => {
  response.setHeader('Content-Type', 'application/json');

  if (request.url === '/topic') {
    switch (request.method) {
      case 'POST':
        routers.post.insertTopic(request, response);
      break;
      
      case 'GET':
        routers.get.getTopics(request, response);
      break;
      
      case 'DELETE':
        routers.delete.delteTopic(request, response);
      break;
      
      case 'PUT':
        routers.put.updateTopic(request, response);
      break;
      
      default:
        response.writeHead(404);
        response.end();
      break;
    }
  }
  else {
    response.writeHead(404);
    response.end();
  }

});

server.listen(8443);

module.exports = server;