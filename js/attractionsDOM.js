"use strict";

let db = require('./db-calls');

function createAttraction(name, description, type_id, area_id) {
    let myAttractionType = "";
    let myAttractionArea = "";

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
        }
    });

    return `<div class="card text-center" style="width: 19rem; margin: 6px;">
                <div class="card-header" style="height: 8.5rem;"><h4>${name}</h4></div>
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

