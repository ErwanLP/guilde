const Worker = require('./../models/worker');


module.exports.readByServerId = (req, res) => {
  return Worker.find({server : req.params.id}).then(
      workers => {
        res.send(workers);
      },
  ).catch(e => {
    console.log(e);
    res.status(500).send(e);
  });
};