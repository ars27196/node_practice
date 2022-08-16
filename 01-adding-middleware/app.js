 
const express = require('express');

const app = express();
  
app.use('/apple',(req, res, next) => {
    console.log('In apple middleware!');
    res.send('<h1>Hello from Apple!</h1>');
});
 
app.use('/',(req, res, next) => {
    console.log('In another middleware!');
    res.send('<h1>Hello from Express!</h1>');
});
 

app.listen(3000);
