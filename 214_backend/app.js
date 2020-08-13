'use strict';

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// Cargar archivos de rutas
var project_routes = require('./routes/project');

// middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Configurar cabeceras y CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Cambiar '*' por las URLs permitidas
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// rutas
app.use('/api', project_routes);

/*
app.get('/', (req, res) => {
    res.status(200).send(
        "<h1>Página de inicio</h1>"
    );
});
app.get('/test', (req, res) => {
    res.status(200).send({
        message: "Hola Mundo desde mi API de NodeJS"
    });
});
app.post('/test/:id', (req, res) => {
    // localhost:3700/test/123?web=dominio.com
    console.log(req.body.nombre);   // {"nombre": "Jeremías"}
    console.log(req.query.web);     // dominio.com
    console.log(req.params.id);     // 123
    res.status(200).send({
        Nombre: req.body.nombre,
        Web: req.query.web,
        Id: req.params.id,
        Texto: `${req.body.nombre}, ${req.query.web}, ${req.params.id}`
    });
});
*/

// exportar
module.exports = app;