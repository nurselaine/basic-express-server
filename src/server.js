'use strict';

const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3002;

// imported files
const errorHandler1 = require('./error-handlers/404');
const errorHandler2 = require('./error-handlers/500');
const logger = require('./middleware/logger');
// const validator = require('./middleware/validator');

// Routes

app.use(logger);

app.get('/', (req, res, next)=> {
    res.status(200).send('Hello world, welcome to my simple server');
});

app.get('/dogs', (req, res, next)=> {
    res.status(200).send('My dog is the best dog in the world!');
});

// add route validator after validator
app.get('/person', (req, res, next) => {
    const { name } = req.query;
    res.status(200).send(`Hello ${name} welcome to my server!`);
});

// Error Routes
app.use( '*' ,errorHandler1);
app.use(errorHandler2);


function start(){
    app.listen(PORT, () => {console.log(`Listening on port ${PORT}`)});
}


module.exports = { app, start };
