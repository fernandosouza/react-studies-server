const connectDB = require('./db');
const assert = require('assert');
const ObjectId = require('mongodb').ObjectID;

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
      collection.remove({ _id: ObjectId(topicId) }).then(callback);
      client.close();
    });
  }

  update(topicId, topicName, callback) {
    assert.ok(topicId)
    connectDB((db, client) => {
      const collection = db.collection('topics');
      collection.findOneAndUpdate(
        { _id: ObjectId(topicId) },
        { $set: { name: topicName } }
      ).then(callback);
      client.close();
    });
  }
}

module.exports = Topics;