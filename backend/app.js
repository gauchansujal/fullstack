const express = require('express');
const app = express();
const port = 8080;

function authenticate(req, res, next){
    const authHeader = req.headers.authorization;

    if(!authHeader) {
        return res.status(401).send('authentication required');
    }

    const token = authHeader.split('')[1];

    if (token === 'secret-token'){
        req.user = {id: 123, username: 'john'};
        next();
    }else{
        res.status(403).send('invalid token');
    }
}

app.get('/api/protected', authenticate, (req, res)=>{
    res.json({message: 'protected data', user: req.user});
});

app.listen(port, ()=>{
    console.log(`http://localhost:${port}`);
});