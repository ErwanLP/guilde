let mongoose = require('mongoose');
let Wheat = require('./item/wheat');

let filedSchema = new mongoose.Schema({
  itemType: {type: String, enum: ['Wheat']},
  production: {type: mongoose.Schema.Types.ObjectId, ref: 'Production'},
});

filedSchema.methods.setProduction = function(production) {
  this.production = production._id;
};

const Field = mongoose.model('Field', filedSchema);

module.exports = Field;