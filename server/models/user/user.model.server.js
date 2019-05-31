var mongoose   = require('mongoose');
var userSchema = require('./user.schema.server');
var userModel  = mongoose.model('userModel', userSchema);

userModel.register = register;

module.exports = userModel;

function register(user) {
  return userModel
    .create(user);
}
