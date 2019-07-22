let mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
  userName: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;