const Similar = require('./index.js');

const imageUrls = ['https://ns-fec-images.s3.amazonaws.com/1.jpg', 'https://ns-fec-images.s3.amazonaws.com/2.jpg', 'https://ns-fec-images.s3.amazonaws.com/3.jpg', 'https://ns-fec-images.s3.amazonaws.com/4.jpg'];

const streetNames = ['Maywood', 'Ingleside', 'Keswick', 'Ross', '55th', 'Brookline', 'Blackstone'];

const streetSuffixes = ['St.', 'Rd.', 'Ave.'];

const states = ['MA', 'MD', 'IL', 'WA', 'CA', 'NY', 'NJ', 'ME', 'CO', 'HI', 'FL'];

const agencies = ['Milehimodern', 'Novella Real Estate', 'Compass', 'Nest Real Estate Group LLC'];

const realtors = ['Thomas Harpole', 'Lora Griswold', 'Natalie Hengel', 'Perry Frietentag', 'Steven Reilly', 'Listy Lemon'];

const tags = ['Garage', 'Parking', 'Hardwood Floor', 'Fireplace', 'Pool', 'Central Air', 'Granite Countertops', 'Brick Exterior', 'Mid-Century Modern', 'Deck'];

const getArrayItem = function(array) {
  var idx = Math.floor(Math.random() * array.length);
  return array[idx];
};

const getNum = function(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

const getZip = function() {
  var zip = '';
  for (var i = 0; i < 5; i++) {
    zip += getNum(0, 10);
  }
  return zip;
};

const getSeveralArrayItems = function(array, min, max) {
  var items = {};
  var numItems = getNum(min, max);
  while (Object.keys(items).length < numItems) {
    items[getArrayItem(array)] = true;
  }
  return Object.keys(items).join(',');
};

const getBoolean = function(probability) {
  return Math.random() <= probability;
};

const create = function(_id, rootHouseId, callback = () => {}) {
  var house = {
    _id: _id,
    rootHouseId: rootHouseId,
    imageUrl: getArrayItem(imageUrls),
    price: 1000 * getNum(150, 750),
    beds: getNum(1, 5),
    baths: getNum(1, 4),
    size: getNum(400, 1700),
    address: {
      number: getNum(1, 3000),
      streetName: getArrayItem(streetNames),
      streetSuffix: getArrayItem(streetSuffixes),
      state: getArrayItem(states),
      zipcode: getZip()
    },
    agency: getArrayItem(agencies),
    realtor: getArrayItem(realtors),
    listing: getNum(1000000, 10000000),
    tags: getSeveralArrayItems(tags, 2, 5),
    videoTour: getBoolean(1 / 12),
    '3dWalkthrough': getBoolean(1 / 12),
    age: getNum(1, 360)
  };

  var similar = new Similar(house);
  similar.save((err, results) => {
    if (err) {
      callback(err);
    } else {
      callback(null, results);
    }
  });
};

module.exports = create;