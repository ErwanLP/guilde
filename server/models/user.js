let mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
  uid: String,
  displayName: String,
  photoURL: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;