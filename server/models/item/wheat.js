let mongoose = require('mongoose');

const Item = require('./../item'); // we have to make sure our Book schema is aware of the Base schema

const Wheat = Item.discriminator('Wheat', new mongoose.Schema({}),
);

module.exports = mongoose.model('Wheat');