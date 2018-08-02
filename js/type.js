"use strict";

let db = require('./db-calls.js');
let attractionsType = require('./attractionsType.js');

let typeData = {};

db.fetchAreas()
.then((result) => {
   typeData = result;
   attractionsType(typeData);
});

module.exports = typeData;