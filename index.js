const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const routes = require('./routes/index.js')

// Se crea la App
const app = express()

// Conectamos con MongoDB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://mongodb:27017/icecreamdespliegueapi', {
    useNewUrlParser : true,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDB Conectado...'))
    .catch((err) => console.log(err))

// Habilitamos el body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Rutas de la App
app.use('/', routes())

// PUERTO
app.listen(5000)