const Server = require('./../models/server');

module.exports.read = (req, res) => {
  return Server.find().then(
      servers => {
        res.send(servers);
      },
  );
};
module.exports.init = (req, res) => {
  return Server.deleteMany({}).then(
      data => {
        let server = new Server();
        server.save();

      },
  );
};