const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/admin');
const shop = require('./routes/shop');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use(router);

app.use(shop);

app.use((req,res,next)=>{
  res.status(400).send("<h1>404 \n Page not Found</h1") 
}
);

app.listen(3000);
