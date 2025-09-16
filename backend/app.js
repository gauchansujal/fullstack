const express = require('express');
const spdy = require('spdy');
const fs = require('fs');
const path = require('path');

const app = express();

app.get('/', (req, res)=>{
  res.send('hello from express over http/2');
});

const options ={
  key : fs.readFileSync(path.join(__dirname, 'key.pem')),
  cert : fs.readFileSync(path.join(__dirname, 'cert.pem')),
  spdy:{

    protocols: ['h2', 'https/1.1'],
     plain : false,
  'x-forwarded-for': true
  }
 
};
const PORT = process.env.PORT || 3000;
spdy.createServer(options, app).listen(PORT,()=>{
  console.log(`express server with http/2 running on port ${PORT}`);
});