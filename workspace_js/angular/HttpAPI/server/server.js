'use strict'

const bodyParser = require('body-parser');
const express = require('express');
const fs = require('fs');

const app = express()
app.use(bodyParser.json());
var urlencodedParser = bodyParser.urlencoded({extended: false});

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'POST');
  next();
});

app.post('/post', (req, res) => {
  console.log(req);
  console.log(req.body);
  console.log('Received request:');
  fs.readFile('data/people.json', 'utf8', (err, data) => {
    if(err) {
      console.log(err);
      throw err;
    } else {
      var obj = JSON.parse(data); // current data from file
      obj.push(req.body); // add new data
      fs.writeFile('data/people.json', JSON.stringify(obj), (err) => {
        if (err) {
          console.log(err);
          throw err;
        } 
        console.log('File written to JSON.json');
        res.send('File written to JSON.json')
      })
    } 
  });
});

app.get('/get', (req, res) => {
  console.log('Got request for data');
  fs.readFile('data/people.json', 'utf8', (err, data) => {
    if(err) {
      console.log(err);
      throw err;
    } else {
      res.send(data);
    }
  })
})

app.listen(3000, ()=>{
  console.log('Listening on port 3000. Post a file to http://localhost:3000 to save to /JSON.json');
});