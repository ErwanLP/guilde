const User = require('./../models/user');

module.exports.readByUid = (uid) => User.findOne({uid: uid});
module.exports.create = (data) => {
  let user = new User(data);
  return user.save();
};