const express = require('express');
const app = express();
const port = 8080;

app.use(express.json());

function validateUsersCreation(req, res, next){
    const {username, email, password} =req.body;

    if(!username || username.length < 3) {
        return res.status(400).json({error: 'Username must be at least 3'});


    }

    if (!email || !email.includes('@')){
        return res.status(400).json({error: 'Valid email is required'});
    }

    if(!password || password.length < 6){
        return res.status(400).json({error: 'password must be at least 6 charactes'});
    }
    next();

}
app.post('/api/users', validateUsersCreation, (req, res)=>{
    res.status(201).json({message: 'users created sucessfully'});
});

app.listen(port, ()=>{
    console.log(`http://localhost:${port}`);
});