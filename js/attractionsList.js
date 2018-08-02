"use strict";
let areaDOM = require('./attractionsDOM.js');

function listAttractions(result) {

    result.forEach(result => {
        writeAttractionsToDom(areaDOM(result.name, result.description, result.type_id));
        // console.log(result.name);
    });
}

function writeAttractionsToDom(result){
    document.querySelector("#Attractions").innerHTML += result;
}

module.exports = listAttractions;