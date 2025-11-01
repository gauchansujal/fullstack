const express = require('express');
const app = express();
const port = 8080;

app.use (express.json());
app.get('/error-demo',(req, res, next)=>{
    try {
        throw new Error('Something went wrong!');

    }catch (error){
        next (error);
    }
});

app.use((err, req, res,next)=>{
    console.error(err.stack);
    res.status(500).json({
        message: 'an error occured',
        error: process.env.NODE_ENV === 'production'? {}:err
    });
});

app.listen(port, ()=>{
    console.log(`http://localhost:${port}`);

});