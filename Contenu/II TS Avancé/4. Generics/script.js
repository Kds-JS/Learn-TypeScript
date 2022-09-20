"use strict";
//  Generics
const Londres = {
    name: "Londres",
    pop: 10,
    additionalData: { area: 1575 }
};
const Paris = {
    name: "Paris",
    pop: 5,
    additionalData: [{ uderground: true, lines: 58 }, { restaurant: true, number: 558 }]
};
// Generics with functions
const addRepairDate = (obj) => {
    const lastRepair = new Date();
    return Object.assign(Object.assign({}, obj), { lastRepair });
};
const auto1 = addRepairDate({ model: "A1", km: 70000, price: 10000 });
const auto2 = addRepairDate({ model: "A1", km: 70000, price: 10000, color: "white" });
console.log(auto1.model);
