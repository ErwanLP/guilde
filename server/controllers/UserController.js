const UsersService = require('./../services/UsersService');

module.exports.signUp = (req, res) => {
  return UsersService.readByUid(req.body.uid).then(
      (user) => {
        console.log('get user');
        if (null === user) {
          // create user
          UsersService.create(req.body).then(
              user => {
                console.log('user created');
                console.log(user);
              },
          );
        } else {
          //
          console.log('user already created');
        }
        res.send('respond with a resource');

      },
  );
};