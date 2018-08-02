"use strict";

let db = require('./db-calls');

function createAttraction(name, description, type_id, area_id, colorTheme) {
    let myAttractionType = "";
    let myAttractionArea = "";
    let myAttractionColor = "";

    let attractionTypes = db.getAttractionTypes();
    attractionTypes.forEach((item) => {
        if(item.id === type_id) {
            myAttractionType = item.name;
        }
    });

    let attractionAreas = db.getAttractionAreas();
    attractionAreas.forEach((item) => {
        if(item.id === area_id) {
            myAttractionArea = item.name;
            myAttractionColor = item.colorTheme;
            
        }
    });

    return `<div class="card text-center" style="width: 19rem; margin: 6px; border-color:#${myAttractionColor}; border-width: medium;">
                <div class="card-header" style="height: 8.5rem; background-color:#${myAttractionColor};"><h4>${name}</h4></div>
                <div class="card-body">
                    <p class="card-text">${description}</p>
                </div>
                <div class="card-footer">
                    <span style="text-transform: capitalize">${myAttractionArea}</span><br>
                    <span style="text-transform: capitalize">${myAttractionType}</span>
                </div>
            </div>`;
}

module.exports = createAttraction;

