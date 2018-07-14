const http = require('http');
const Topics = require('./topics');

const server = http.createServer();

server.on('request', (request, response) => {
  console.log(request.url);
  console.log(request.method);

  if (request.url === '/' && request.method === 'GET') {
    const topics = new Topics();
    topics.insert({name: '!!!'}, docs => {
      console.log(docs, '?');
    });
  }
	response.end();
});
server.listen(8443);
