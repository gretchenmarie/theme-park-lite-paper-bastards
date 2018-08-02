"use strict";

function createAttraction(name, description, type_id) {
    return `<div class="card flex-item" style="width: 19rem; margin: 6px;">
                <div class="card-header" style="height: 8.5rem;"><h4>${name}</h4></div>
                <div class="card-body">
                    <p class="card-text">${description}</p>
                </div>
                <div class="card-footer">${type_id}</div>
            </div>`;
}

module.exports = createAttraction;