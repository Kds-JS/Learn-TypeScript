// Tuple

let tuple: [boolean,number];
// tuple = [false,'50'] erreur
tuple = [false,50]
// tuple.push(4);
// console.log(tuple);


// Enum

// const Roles = {
//     JAVASCRIPT: 1,
//     CSS: 2,
//     REACT: 3
// }

// console.log(Roles.CSS);

enum Roles {JAVASCRIPT,CSS,REACT};
// enum Roles {JAVASCRIPT = 1,CSS,REACT}; le faire demarrer à 1
console.log(Roles.REACT);
