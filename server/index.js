const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, '../dist')));

app.get('/', (req, res) => {
  res.send('hello');
});

app.listen(3001, () => {
  console.log('listening on 3001');
});