'use strict'

const express = require('express');
const BodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;
app.use(BodyParser.urlencoded({extended: false}));
app.use(BodyParser.json());

app.get('/api/product', (req, res) => {
    res.send(200, {products: []})
})

app.get('/api/product/:productId', (req, res) => {

})

app.post('/api/product', (req, res) => {
    console.log(req.body)
    res.status(200).send({message: 'producto recibido'})
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

