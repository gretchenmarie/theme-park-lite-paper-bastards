"use strict";

// This is here to get you started. You may remove or move as necessary.
let parkInfo = require('./parkInfo');
let areaData = require('./areas');
let areasList = require('./areasList');
let areaGrid = require('./area-grid');

function populatePage(areaArray){
    console.log("areaArray", areaArray);
    let newDiv = document.createElement("div");
    newDiv.setAttribute("class", "flex-container");
    let content = areaArray.map(areaGrid.makeGridItem);
 
    console.log(content.length);
 
    newDiv.innerHTML = content.join(" ");
    // console.log("inner", newDiv.innerHTML);
    document.getElementById("area-cards").append(newDiv);
 }

 const areaStuff = cakeInventory.getInventory();
console.log("areastuff", areaStuff);
populatePage(areaStuff);