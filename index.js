'use strict'

const express = require('express');
const BodyParser = require('body-parser');
const mongoose = require('mongoose');

const Product = require('./Modelos/product');

const app = express();
const port = process.env.PORT || 3000;
app.use(BodyParser.urlencoded({extended: true}));
app.use(BodyParser.json());

app.get('/api/product', (req, res) => {
    Product.find({}, (err, producto) => {
        if(err){
            return res.status(500).send({message: 'Error al obtener los productos'})
        }
        else{
            res.status(200).send({products: producto})
        }
        if(!producto){
            return res.status(404).send({message: 'No existen productos'})
        }
        else{
            res.status(200).send({products: producto})
        }
    })
})

app.get('/api/product/:productId', (req, res) => {
    let productId = req.params.productId
    Product.findById(productId, (err, producto) => {
        if(err){
            return res.status(500).send({message: 'Error al obtener los productos'})
        }
        else{
            res.status(200).send({products: producto})
        }
        if(!producto){
            return res.status(404).send({message: 'No existen productos'})
        }
        else{
            res.status(200).send({products: producto})
        }
    })
})
 
app.post('/api/product', (req, res) => {
    console.log(req.body)
    let producto = new Product()
    producto.name = req.body.name
    producto.picture = req.body.picture
    producto.price = req.body.price
    producto.category = req.body.category
    producto.descripcion = req.body.descripcion
    producto.save((err, productStored) => {
        if(err){
            res.status(500).send({message : 'Error al guardar'})
        }
        else{
            res.status(200).send({productStored})
        }
    })
})

app.put('/api/product/:productId', (req, res) => {

})

app.delete('/api/product/:productId', (req, res) => {

})

mongoose.connect('mongodb://localhost:27017/shop',{ useNewUrlParser: true }, (err, res) => {
    if(err) {
        console.log(`error al conectar a la bd: ${err}`)
    }
    console.log('conexion a la bd establecida')

    app.listen(3000, () => {
        console.log(`API REST corriendo en puerto ${port}`);
    });
})

