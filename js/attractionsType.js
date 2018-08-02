"use strict";
let typeDom = require('./typeDom.js');
// let getInfo = require('./db-calls.js');


function listType(result) {

   result.forEach(result => {
       writeContactsToDom(typeDom(result.id,result.name));
       console.log(result.name);
   });
}

function writeContactsToDom(result){
   document.querySelector("#type").innerHTML += result;
}

module.exports = listType;