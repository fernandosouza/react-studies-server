const Topics = require('./topics');
const anyBody = require('body/any'); // This module is to parse body form post requests.
const topics = new Topics();

module.exports = {
  post: {
    insertTopic: function (request, response) {
      anyBody(request, response, {}, (err, body) => {
        topics.insert({ name: body.name }, docs => {
          let payload = 'error';
          if (docs.result.ok) {
            payload = docs.ops;
          }
          response.end(JSON.stringify(payload));
        })
      })
    }
  },
  get: {
    getTopics: function (request, response) {
      topics.getAll(data => {
        response.end(JSON.stringify(data));
      })
    }
  },
  delete: {
    delteTopic: function (request, response) {
      anyBody(request, response, {}, (err, body) => {
        topics.remove(body.id, data => {
          response.end(JSON.stringify(data));
        })
      })
    }
  },
  put: {
    updateTopic: function (request, response) {
      anyBody(request, response, {}, (err, body) => {
        topics.update(body.id, body.name, data => {
          response.end(JSON.stringify(data));
        })
      })
    }
  }
}