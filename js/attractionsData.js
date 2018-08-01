"use strict";

let db = require('./db-calls.js');

let attractions = {};

db.fetchAttractions()
   .then((result) => {
    attractions = result;
});


module.exports = attractions;