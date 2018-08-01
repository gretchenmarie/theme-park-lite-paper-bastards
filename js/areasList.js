"use strict";

let createAreaDesc = require("./areas");


function listAreas() {

    getContacts().forEach(contact => {
        writeContactsToDom(createContact(contact.name, contact.phone, contact.address))
    });
}

function writeContactsToDom(contact){
    document.querySelector("#contact-card").innerHTML += contact;
}

module.exports = listContacts;