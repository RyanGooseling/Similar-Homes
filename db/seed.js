const Similar = require('./index.js');

const imageUrls = ['https://ssl.cdn-redfin.com/photo/94/ismphoto/098/genIsm.6019098_2.jpg', 'https://ssl.cdn-redfin.com/photo/94/ismphoto/398/genIsm.7064398_0.jpg', 'https://ssl.cdn-redfin.com/photo/94/ismphoto/314/genIsm.5995314_0.jpg', 'https://ssl.cdn-redfin.com/photo/94/ismphoto/833/genIsm.7394833_0.jpg'];

const streetNames = ['Maywood', 'Ingleside', 'Keswick', 'Ross', '55th', 'Brookline', 'Blackstone'];

const streetSuffixes = ['St.', 'Rd.', 'Ave.'];

const states = ['MA', 'MD', 'IL', 'WA', 'CA', 'NY', 'NJ', 'ME', 'CO', 'HI', 'FL'];

const agencies = ['Milehimodern', 'Novella Real Estate', 'Compass', 'Nest Real Estate Group LLC'];

const realtors = ['Thomas Harpole', 'Lora Griswold', 'Natalie Hengel', 'Perry Frietentag', 'Steven Reilly', 'Listy Lemon'];

const tags = ['Garage', 'Parking', 'Hardwood Floor', 'Fireplace', 'Pool', 'Central Air', 'Granite Countertops', 'Brick Exterior', 'Mid-Century Modern', 'Deck'];

const getArrayItem = function(array) {
  var idx = Math.floor(Math.random() * array.length);
  return array[idx];
}

const getNum = function(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

const getZip = function() {
  var zip = '';
  for (var i = 0; i < 5; i++) {
    zip += getNum(0, 10);
  }
  return zip;
}

const getSeveralArrayItems = function(array, min, max) {
  var items = {};
  var numItems = Math.floor(Math.random() * (max - min) + min);
  while (Object.keys(items).length < numItems) {
    items[getArrayItem(array)] = true;
  }
  return Object.keys(items).join(',');
};

const getBoolean = function(probability) {
  return Math.random() <= probability;
};

const create = function(_id, rootHouseId) {
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
    videoTour: getBoolean(1/12),
    '3dWalkthrough': getBoolean(1/12),
    age: getNum(1, 360)
  };

  var similar = new Similar(house);
  similar.save((err, results) => {
    if (err) {
      console.error('error!' + err);
    } else {
      console.log('success!' + results);
    }
  });
};

for (var i = 1; i <= 100; i++) {
  for (var j = 0; j < 6; j++) {
    create(5 * (i - 1) + j, i);
  }
}

console.log(':<<<)');