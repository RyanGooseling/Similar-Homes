/**
 * @jest-environment node
 */

var timesSix = (n) => n * 6;

test('should multiply a number by 6', () => {
  var n = Math.floor(Math.random() * 10);
  expect(timesSix(n)).toBe(n * 6);
});

const axios = require('axios');

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