const express = require('express');
const app = express();
const port = 8080;

app.use((req, res, next)=>{
  console.log('Middleware 1 : thsi always runs');
  next();

});

app.use((req, res, next)=>{
  console.log('Middleware 2 : this also always runs');
  next();
});

app.get('/', (req, res)=>{
  res.send('hello world');
});

app.listen(port, ()=>{
  console.log(`http://localhost:${port}`);
});