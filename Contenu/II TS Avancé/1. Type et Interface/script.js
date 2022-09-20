"use strict";
// Intersection
const shark1 = {
    fin: 3,
    element: "water",
    gills: true,
    weight: 500,
    length: 200,
    test: "abc"
};
let obj;
const RedRose = {
    pollen: true,
    type: "vegetal",
    color: "Rose",
    thorn: true,
};
const automaticResponse = (country) => {
    if (country.lang === "JA") {
        console.log("Hello Japan");
    }
    else if (country.lang === "IT") {
        console.log("Hello Italy");
    }
};
const Japanese1 = {
    lang: "JA",
    food: ["Ramen", "Sushis"]
};
automaticResponse(Japanese1);
const spainTrip = {
    john: { id: 1 },
    tom: { id: 2 },
    julia: { id: 3 }
};
