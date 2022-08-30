const file = require('fs');
const path =require('../util/path');
const pathLib = require('path');

module.exports = class Product{

    constructor (t){
        this.title = t;
    }

    save(){
        const p = pathLib.join(path)
    }

    static fetch(){
        return products;
    }
}