const UsersService = require('./../services/UsersService');

module.exports.signUp = (req, res) => {
  return UsersService.readByUid(req.body.uid).then(
      (user) => user === null ?
          UsersService.create(req.body) :
          Promise.resolve(user),
  ).then(
      user => res.send(user),
  );
};