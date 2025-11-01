const express = require('express');
const app = express();
const port = 8080;

app.use (express.json());


app.get('/async-data', async(req,resizeBy, next)=>{
    try{
        const data = await fetchDataFromDatabase();
        res.json(data);
    }catch (error){
        next(error);

    }
});

function asyncHandler(fn){
    return (req, res, next)=>{
        Promise.resolve(fn(req, res, next)).catch (next);
    };

}

app.get('/better-async', asyncHandler(async (req, res)=>{
    const data = await fetchDataFromDatabase();
    res.json(data);
}));
app.listen(port, ()=>{
    console.log(`http://localhost:${port}`);

});