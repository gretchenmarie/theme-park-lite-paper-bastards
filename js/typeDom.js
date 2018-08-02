"use strict";


function createType(id,name) {
   return `<div class="typeCSS">
                <h1 class="id">${id}</h1>
                <p class="name">${name}</p>
           </div>`;
}

module.exports = createType;
