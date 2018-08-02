"use strict";

let makeGridItem = (item, index) => {

   let areaComponent = `<div id="card--${index}" class="card flex-item">
      <h3>#${index} CakeType: ${item.colorTheme}</h3>
      <div class="card-body">
       <h5 class="card-title">${item.name}</h5>
         <p class="card-text">${item.description}</p>
      </div>
   </div>`;

   return areaComponent;
    
};

module.exports = { makeGridItem };