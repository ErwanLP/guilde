let mongoose = require('mongoose');
let Wheat = require('./item/wheat');

let locationSchema = new mongoose.Schema({
  fertilityList: [
    {
      // fertility blé [no - oui - forte] ou alors une echel de un a 10;
      ratio: {type: Number, min: 0, max: 10},
      itemType: {type: String, enum: ['Wheat']},
    },
  ],
  server: {type: mongoose.Schema.Types.ObjectId, ref: 'Server'},
  player: {type: mongoose.Schema.Types.ObjectId, ref: 'Player'},
});

locationSchema.methods.setPlayer = function(player) {
  this.player = player._id;
};

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;