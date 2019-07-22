let mongoose = require('mongoose');

const ProductionOptions = {
  discriminatorKey: 'type', // our discriminator key, could be anything
  collection: 'production', // the name of our collection
};

let ProductionSchema = new mongoose.Schema({
      level: {type: Number, default: 1},
      location: {type: mongoose.Schema.Types.ObjectId, ref: 'Location'},
      player: {type: mongoose.Schema.Types.ObjectId, ref: 'Player'},

    }, ProductionOptions,
);

ProductionSchema.methods.setLocation = function(location) {
  this.location = location._id;
};

ProductionSchema.methods.setPlayer = function(player) {
  this.player = player._id;
};

// Our Base schema: these properties will be shared with our "real" schemas
const Production = mongoose.model('Production', ProductionSchema);

module.exports = Production;