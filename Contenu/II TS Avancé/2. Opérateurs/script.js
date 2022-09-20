"use strict";
// L'opérateur 
const container = document.querySelector(".container");
const user1 = {
    title: "Dev Front-End",
    // description: "Développeur de sites internet",
    salary: 30000
};
// console.log(user1?.description);
// Optional Parameter
function message(msg) {
    if (msg) {
        console.log(msg);
    }
    else {
        console.log("No message Provided");
    }
}
const house1 = {
    room: 4,
    price: 45,
    // garage: 85
};
// ?? Opérateur
// const data = "";
// const display = data || "Hello world";
const data = 0;
const display = data !== null && data !== void 0 ? data : "Hello world";
console.log(display);
// Never 
function alertUser(msg) {
    throw msg;
}
alertUser("Alerte, comportement dangereux");
