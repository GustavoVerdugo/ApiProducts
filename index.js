'use strict'

const mongoose = require('mongoose');
const app = require('./app')
const port = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/shop',{ useNewUrlParser: true }, (err, res) => {
    if(err) {
        console.log(`error al conectar a la bd: ${err}`)
    }
    console.log('conexion a la bd establecida')

    app.listen(3000, () => {
        console.log(`API REST corriendo en puerto ${port}`);
    });
})

