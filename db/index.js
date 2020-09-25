const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/NSFEC');

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