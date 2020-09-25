const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, '../dist')));

app.get('/hello', (req, res) => {
  res.send('hello world!');
});

app.listen(3001, () => {
  console.log('listening on 3001');
});