const path = require('path');

const express = require('express');


const router = express.Router();
const  productController = require('../controllers/products');



// /admin/add-product => GET
router.get('/add-product', productController.getProducts );

// /admin/add-product => POST
router.post('/add-product',productController.addProductPost );

module.exports= router;
