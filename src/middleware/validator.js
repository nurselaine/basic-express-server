'use strict';

module.exports = (req, res, next) => {
    // validate query string for name property
    let { name } = req.query;

    // console.log(`name ${name}`);
    try {
        if(name) {
            res.status(200).json({"name": name});
            next();
        } else {
            res.status(500).send('Name Not Found from validator');
        }
    } catch(error) {
        next(error);
    }
}
