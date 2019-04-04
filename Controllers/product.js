'use strict'

const Product = require('../Modelos/product');

function getProduct(req, res) {
    let productId = req.params.productId
    Product.findById(productId, (err, producto) => {
        if (err) {
            return res.status(500).send({ message: 'Error al obtener los productos' })
        }
        else {
            res.status(200).send({ products: producto })
        }
        if (!producto) {
            return res.status(404).send({ message: 'No existen productos' })
        }
        else {
            res.status(200).send({ products: producto })
        }
    })
}

function getProducts(req, res) {
    Product.find({}, (err, producto) => {
        if (err) {return res.status(500).send({ message: 'Error al obtener los productos' })}
        if (!producto) {return res.status(404).send({ message: 'No existen productos' })}
        res.status(200).send({ product: producto })
    })
}

function updateProduct(req, res) {
    let productId = req.params.productId
    let update = req.body

    product.findByIdAndUpdate(productId, update, (err, productUpdated) => {
        if (err) res.status(500).send({ message: `Error al actualizar el producto ${err}` })

        res.status(200).send({ message: `Producto Actualizado ${productUpdated}` })
    })
}

function deleteProduct(req, res) {
    let productId = req.params.productId;
    Product.findById(productId, (err, product) => {
        if (err) res.status(500).send({ message: `Error al borrar el producto ${err}` })

        product.remove(err => {
            if (err) res.status(500).send({ message: `Error al borrar el producto ${err}` })
            res.status(200).send({ message: `Producto Borrado` })
        })
    })
}

function saveProduct(req, res) {
    console.log(req.body)
    let producto = new Product()
    producto.name = req.body.name
    producto.picture = req.body.picture
    producto.price = req.body.price
    producto.category = req.body.category
    producto.descripcion = req.body.descripcion
    producto.save((err, productStored) => {
        if (err) {
            res.status(500).send({ message: 'Error al guardar' })
        }
        else {
            res.status(200).send({ productStored })
        }
    })
}

module.exports = {
    getProduct,
    getProducts,
    updateProduct,
    deleteProduct,
    saveProduct
}