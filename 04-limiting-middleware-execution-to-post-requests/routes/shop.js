const shop = require("express").Router();

shop.get("/",(req,res,next)=>{
    res.send('<h1>Hello from Express!</h1>');   
});

module.exports = shop;