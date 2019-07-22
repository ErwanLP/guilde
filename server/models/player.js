let mongoose = require('mongoose');
let playerSchema = new mongoose.Schema({
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  unitList: [
    {
      item: {type: mongoose.Schema.Types.ObjectId, ref: 'Item'},
    },
  ],
});

playerSchema.methods.setUser = function(user) {
  this.user = user._id;
};

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;