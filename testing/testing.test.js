/**
 * @jest-environment node
 */

const axios = require('axios');
const { JSDOM } = require('jsdom');
const Similar = require('../db/index.js');
const create = require('../db/create.js');

describe('server', () => {
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
});

describe('database', () => {
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
            create(1, 1, (err) => {
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
});

describe('front-end', () => {
  test('client renders correctly at endpoint /homes/:id', (done) => {
    var options = {
      method: 'get',
      url: 'http://localhost:3001/homes/1'
    };
    axios(options)
      .then((results) => {
        var { document } = new JSDOM(results.data).window;
        expect(document.querySelector('title').textContent).toBe('BlueFin Similar Homes');
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
});