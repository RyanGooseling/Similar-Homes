const Similar = require('./index.js');
const create = require('./create.js');

Similar.deleteMany();

for (var i = 1; i <= 100; i++) {
  for (var j = 0; j < 6; j++) {
    create(5 * (i - 1) + j, i);
  }
}