let mongoose = require('mongoose');

const Production = require('./../production'); // we have to make sure our Book schema is aware of the Base schema

const Farmhouse = Production.discriminator('Farmhouse', new mongoose.Schema({
      // la femre est lié a une fertilité
      // comme le mine plus tard
      // le level de la ferme va faire en forte que l'on pourra mettre plus de champs
      // le serveur sera limité dans le temps (?)
      // créer un serveur
      // la meteo influe sur
    }),
);

module.exports = mongoose.model('Farmhouse');