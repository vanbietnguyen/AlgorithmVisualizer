const path = require('path');
const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const cookie = require('cookie');

const index = path.join(__dirname, '../src/index.html')

const app = express();
const PORT = 3000;

///Users/vannguyen/Documents/codesmith_units/SoloProj2/server
console.log(__dirname)
app.use('/build', express.static(path.join(__dirname, '../build')));

app.get('/', (req, res) => res.sendFile(index));

app.get('/algos', (req, res) => {
  res.sendFile(index);
});

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
  });
  
  module.exports = app;