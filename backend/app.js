const express = require('express');
const app = express();
const port = 8080;

app.get('/error', (req,res)=>{
  throw new Error('something went wrong');
});

app.get('/async-error', (req,res)=>{
  setTimeout(()=>{
    try{
      const result = nonExistentFunction(); 
      res.send(result);
    }
    catch (error){
      next(error);

    }

  },100);

});
app.use((err, req, res, next)=>{
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
app.listen(port, ()=>{
  console.log(`Example app listening at http://localhost:${port}`);
});