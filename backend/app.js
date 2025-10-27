const express = require('express');
const app = express();
const port = 8080;

app.get('/users/:userId/:booksId', (req, res)=>{
  res.send(`User ID : ${req.params.userId}, Book ID : ${req.params.booksId}`);

});

app.listen(port, ()=>{
  console.log(`example app listening at http://localhost:${port}`);

});