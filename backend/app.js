const express = require('express');
const app = express();
const port = 8080;

app.set('view engine', 'ejs');

app.set('views', './view');

app.get('/', (req, res)=>{
  const data = {
    title : 'express templates eample',
    message : 'hello world form ejs',
    items : ['item 1', 'item 2', 'item 3']
  };

  res.render('index', data);
});

app.listen(port, ()=>{
  console.log(`http://localhost:${port}`);
});