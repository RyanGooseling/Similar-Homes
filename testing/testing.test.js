/**
 * @jest-environment node
 */

const axios = require('axios');
const Similar = require('../db/index.js');
const create = require('../db/create.js');

test('identifies correctly', () => {
  expect(1).toEqual(1);
  expect(2).toBe(2);
  expect(0).not.toBe(3);
});

test('receives server response \'hello world!\' from GET request to localhost:3001/hello', (done) => {
  var options = {
    method: 'get',
    url: 'http://localhost:3001/hello'
  };
  axios(options)
    .then((results) => {
      expect(results.data).toBe('hello world!');
      done();
    })
    .catch((err) => {
      done(err);
    });
});

test('empties collection, then creates one file', (done) => {
  Similar.deleteMany({}, (err) => {
    if (err) {
      done(err);
    } else {
      Similar.find({}, (err, results) => {
        if (err) {
          done(err);
        } else {
          expect(results.length).toBe(0);
          create(0, 0, (err) => {
            if (err) {
              done(err);
            } else {
              Similar.find({}, (err, results) => {
                if (err) {
                  done(err);
                } else {
                  expect(results.length).toBe(1);
                  done();
                }
              });
            }
          });
        }
      });
    }
  });
});