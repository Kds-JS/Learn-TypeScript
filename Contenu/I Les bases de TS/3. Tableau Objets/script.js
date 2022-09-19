"use strict";
const fruits = ['fraise', 'pomme'];
fruits.push("cerises");
console.log(fruits);
const mixedArray = [1, 'text', [1, 2, 3]];
mixedArray.push(([5, 6]));
let nums;
// nums.push(1) erreur
nums = [1, 2, 3];
let nums2 = [];
nums2.push(1);
let random;
random = [true, 'hello', 15];
// Object
const car = {
    name: 'Audi',
    model: "A1",
    km: 70000
};
// car.name = 4  erreur
let profile;
profile = {
    name: 'john',
    age: 85,
    hobbies: ["Foot", "Basket"]
};
let user = {
    name: "Joe",
    age: 45,
    favFood: ['paste', 'cheese'],
    data: 50
};
let obj;
obj = { name: 'enzo' };
