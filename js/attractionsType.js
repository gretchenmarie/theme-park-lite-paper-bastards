"use strict";

let db = require('./db-calls.js');

let attractionType = {};

db.fetchTypes()
   .then((result) => {
    attractionType = result;
});


module.exports = attractionType;