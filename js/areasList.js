"use strict";
let areaDOM = require('./areasDOM.js');
// let getInfo = require('./db-calls.js');


function listAreas(result) {

    result.forEach(result => {
        writeContactsToDom(areaDOM(result.name, result.description, result.id));
        console.log(result.name);
    });
}

function writeContactsToDom(result){
    document.querySelector("#areas").innerHTML += result;
}

module.exports = listAreas;