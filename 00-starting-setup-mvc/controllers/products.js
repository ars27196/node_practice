const Product = require("../models/product");

  
exports.addProduct = (req, res, next) => {
  let prod = Product.fetch(); 
     res.render('shop', {
      prods: prod,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: prod.length > 0,
      activeShop: true,
      productCSS: true
    });
  };

  exports.getProducts = (req, res, next) => {

    res.render('add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
  };


  exports.addProductPost = (req, res, next) => {
    let prod = new Product(req.body.title );
    prod.save(prod);
    res.redirect('/');
  };