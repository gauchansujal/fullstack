const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req,res)=>{
  res.send('hello world form express.js');
});
app.listen(port, ()=>{
  console.log(`exppress server running at http://localhost:${port}`);
});