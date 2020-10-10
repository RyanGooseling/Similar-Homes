const url = require('./secrets.js');
const mongoose = require('mongoose');
mongoose.connect(url);

const homeSchema = mongoose.Schema({
  _id: Number,
  rootHouseId: Number,
  imageUrl: String,
  price: Number,
  beds: Number,
  baths: Number,
  size: Number,
  address: {
    number: Number,
    streetName: String,
    streetSuffix: String,
    city: String,
    state: String,
    zipcode: String
  },
  agency: String,
  realtor: String,
  listing: Number,
  tags: String,
  videoTour: Boolean,
  '3dWalkthrough': Boolean,
  age: Number
});

const Similar = mongoose.model('Similar', homeSchema);

module.exports = Similar;