'use strict'

const express = require('express');
const BodyParser = require('body-parser');
const app = express();
const api = require('./Routes/index');

app.use(BodyParser.urlencoded({extended: true}));
app.use(BodyParser.json());
app.use('/api', api)
module.exports = app