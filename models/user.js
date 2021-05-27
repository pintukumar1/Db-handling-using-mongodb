const mongodb = require('mongodb')
const getDb = require('../util/database').getDb

const ObjectId = mongodb.ObjectId

class User {
  constructor(userName , email){
    this.name = userName;
    this.email = email
  }
  save () {
    const db = getDb()
    return db.collection('users').insertOne(this);
  }
  static findById(userId){
    const db = getDb()
    return db.collection('users')
    .findOne({_id: new ObjectId(userId) })
    .then(user => {
      console.log(user)
      return user
    })
    .catch(error => {
      console.log(error)
    })
  }
}

module.exports = User