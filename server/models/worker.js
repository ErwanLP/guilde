let mongoose = require('mongoose');

let workerSchema = new mongoose.Schema({
  workerName: {type: String},
  server: {type: mongoose.Schema.Types.ObjectId, ref: 'Server'},
  field: {type: mongoose.Schema.Types.ObjectId, ref: 'Field'},

});

workerSchema.methods.setField = function(field) {
  this.field = field._id;
};

const Worker = mongoose.model('Worker', workerSchema);

module.exports = Worker;