const express = require('express');
const path = require('path');
const Similar = require('../db/index.js');

const app = express();
app.use(express.json());
app.use('/homes/:id', express.static(path.join(__dirname, '../dist')));

app.get('/hello', (req, res) => {
  res.send('hello world!');
});

app.get('/data/homes/:id', (req, res) => {
  Similar.find({ rootHouseId: req.params.id }, (err, results) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.send(results);
    }
  });
});

app.listen(3001, () => {
  console.log('listening on 3001');
});