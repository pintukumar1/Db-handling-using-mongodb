const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionUrl = 'mongodb://127.0.0.1:27017'
const databaseName = 'db-using-mongodb-shop-app'

let _db;

const mongoConnect = callback => {
  MongoClient.connect(connectionUrl, {useUnifiedTopology: true})
  .then(client => {
    console.log('Connected Correctly!!')
    _db = client.db(databaseName)
    callback()
  })
  .catch(err => {
     console.log(err)
     throw err
  })
}

const getDb = () => {
  if(_db) {
    return _db
  }
  throw 'No database Found'
}

exports.mongoConnect = mongoConnect,
exports.getDb = getDb