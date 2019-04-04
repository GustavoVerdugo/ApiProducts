'use strict'

const express = require('express');
const Productcontroller = require('../Controllers/product')
const api = express.Router(); //Funcion Route de NodeJs *Genera un enrutador*

api.get('/product', Productcontroller.getProducts);
api.get('/product/:productId', Productcontroller.getProduct); 
api.post('/product', Productcontroller.saveProduct);
api.put('/product/:productId', Productcontroller.updateProduct);
api.delete('/product/:productId', Productcontroller.deleteProduct);

module.exports = api 