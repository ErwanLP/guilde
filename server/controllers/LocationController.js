const Location = require('./../models/location');


module.exports.readByServerId = (req, res) => {
  return Location.find({server : req.params.id}).then(
      locations => {
        res.send(locations);
      },
  ).catch(e => {
    console.log(e);
    res.status(500).send(e);
  });
};