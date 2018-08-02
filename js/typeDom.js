"use strict";

function createType(id,name) {
   return `<h1>${id}</h1>
           <p>${name}</p>`;
}

module.exports = createType;