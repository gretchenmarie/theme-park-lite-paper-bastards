"use strict";

let db = require('./db-calls.js');
let attractionsList = require('./attractionsList.js');

let attractionsData = {};

db.fetchAttractions()
.then((result) => {
    attractionsData = result;
    attractionsList(attractionsData);
});

module.exports = attractionsData;

    