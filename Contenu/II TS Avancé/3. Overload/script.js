"use strict";
function combine(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    else {
        return a + b;
    }
}
console.log(combine(60, 50));
console.log(combine("Test1", 50));
