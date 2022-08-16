const express = require ("express");

const app  = express();
app.use('/users', (req,res, next)=>{
    console.log("yes yes yes");
    res.send("<h2>users</h2>");
});

app.use('/', (req,res, next)=>{
    console.log("no no no");
});

app.listen(3000)
