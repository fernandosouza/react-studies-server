const MongoClient = require('mongodb').MongoClient;
const Server = require('mongodb').Server;
const assert = require('assert');

function connectDB(callBack) {
  // this can bet turned into a new class that provies any type of databases
  // through an common interface.
  MongoClient.connect(new Server('localhost', 27017), (err, client) => {
    assert.equal(null, err);
    callBack(client.db('studies'), client);
  });
}

module.exports = connectDB;