const connectDB = require('./db');
const assert = require('assert');

class Topics {
  getAll(callback) {
    connectDB((db, client) => {
      const collection = db.collection('topics');
      collection.find({}).toArray((err, docs) => {
        assert.equal(err, null);
        callback(docs);
        client.close();
      });
    });
  }

  insert(topic, callback) {
    assert.ok(topic);
    connectDB((db, client) => {
      const collection = db.collection('topics');
      collection.insert(topic).then(callback);
      client.close();
    });
  }

  remove(topicId, callback) {
    assert.ok(topicId)
    connectDB((db, client) => {
      const collection = db.collection('topics');
      collection.remove({ _id: topicId }).then(callback);
      client.close();
    });
  }
}

module.exports = Topics;