"use strict";


function createType(id,name) {
   return `<div class="typeCSS">
                <h1>${id}</h1>
                <p>${name}</p>
           </div>`;
}

module.exports = createType;
