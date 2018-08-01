"use strict";

let attractionsDB = require('./db-calls.js');

let attractions = {};

attractionsDB.fetchAttractions()
   .then((result) => {
    attractions = result;
    console.log(result);
});

module.exports = attractions;

/* "use strict";

function createAttraction(name, description){
    return `<h1>${name}</h1>
            <p>${description}</p>`;
}

module.exports = createAttraction; */