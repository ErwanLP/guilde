let mongoose = require('mongoose');
let Location = require('./location');
let Worker = require('./worker');

let serverSchema = new mongoose.Schema({});

serverSchema.methods.generateLocation = function(fertilityList) {
  let location = new Location({
    fertilityList: fertilityList,
    server: this._id,
  });
  return [location];
};

serverSchema.methods.generateWorker = function(workerData) {
  let worker = new Worker({
    workerName: workerData.workerName,
    server: this._id,
  });
  return [worker];
};

serverSchema.post('remove', document => {
  Location.find({server: document._id}).then(
      locations => locations.forEach(l => l.remove()),
  );
});

const Server = mongoose.model('Server', serverSchema);

module.exports = Server;