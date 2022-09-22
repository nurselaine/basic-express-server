'use strict';

const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3002;

// imported files
const errorHandler1 = require('./error-handlers/404');
const errorHandler2 = require('./error-handlers/500');
const logger = require('./middleware/logger');
const validator = require('./middleware/validator');

// Routes

app.use(logger);

app.get('/', (req, res, next)=> {
    res.status(200).send('Hello world');
    next();
});

// add route validator after validator
app.get('/person', validator, (req, res, next) => {
    res.status(200).send(req.query);
});

// Error Routes
app.use( '*' ,errorHandler1);
app.use(errorHandler2);


function start(){
    app.listen(PORT, () => {console.log(`Listening on port ${PORT}`)});
}


module.exports = { app, start };
