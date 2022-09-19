"use strict";
// Tuple
let tuple;
// tuple = [false,'50'] erreur
tuple = [false, 50];
// tuple.push(4);
// console.log(tuple);
// Enum
// const Roles = {
//     JAVASCRIPT: 1,
//     CSS: 2,
//     REACT: 3
// }
// console.log(Roles.CSS);
var Roles;
(function (Roles) {
    Roles[Roles["JAVASCRIPT"] = 0] = "JAVASCRIPT";
    Roles[Roles["CSS"] = 1] = "CSS";
    Roles[Roles["REACT"] = 2] = "REACT";
})(Roles || (Roles = {}));
;
// enum Roles {JAVASCRIPT = 1,CSS,REACT}; le faire demarrer à 1
console.log(Roles.REACT);
