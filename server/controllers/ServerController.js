const Server = require('./../models/server');

module.exports.read = (req, res) => {
  return Server.find().then(
      servers => {
        res.send(servers);
      },
  );
};

module.exports.readById = (req, res) => {
  return Server.findById(req.params.id).then(
      server => {
        res.send(server);
      },
  ).catch(e => {
    console.log(e);
    res.status(500).send(e);
  });
};

module.exports.init = async () => {
  // PURGE
  let servers = await Server.find({});
  for await (p of servers.map(s => s.remove())) {
  }
  // CREATE
  let server = new Server();
  await server.save();
  server.generateLocation([
    {
      ratio: 5,
      itemType: 'Wheat',
    },
  ]).forEach(location => {
    location.save();
  });
  server.generateWorker({
    workerName: 'Worker 1',
  }).forEach(worker => {
    worker.save();
  });
};