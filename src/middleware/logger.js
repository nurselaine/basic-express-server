'use strict';

const logger = (req, res, next) => {
    console.log(`REQUEST : ${req.method}, ${req.originalUrl}`);
    next();
}

module.exports = logger;
// use logger middleware JUST for one specific route
// Run another Loggger on ALL routes then call app.use(anotherLogger) before all routes
