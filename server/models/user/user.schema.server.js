var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  name         : String,
  email        : {type : String, unique : true},
  phone        : String,
  password     : String,
  dateCreated  : {type : Date, default: Date.now},
}, {collection : "users"});

module.exports = userSchema;
