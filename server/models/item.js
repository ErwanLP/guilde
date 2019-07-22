let mongoose = require('mongoose');

const ItemOptions = {
  discriminatorKey: 'type', // our discriminator key, could be anything
  collection: 'item', // the name of our collection
};

// Our Base schema: these properties will be shared with our "real" schemas
const Item = mongoose.model('Item', new mongoose.Schema({}, ItemOptions,
    ),
);

module.exports = mongoose.model('Item');