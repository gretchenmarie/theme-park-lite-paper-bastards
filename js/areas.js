"use strict";

let db = require('./db-calls.js');
let areasList = require('./areasList.js');

let areaData = {};

db.fetchAreas()
.then((result) => {
    areaData = result;
    areasList(areaData);
});

module.exports = areaData;

    