type NumberOrString = number | string;


// function combine(a: NumberOrString, b: NumberOrString) : number | string {
//     if (typeof a === "string" || typeof b === "string") {
//         return a.toString() + b.toString();
//     } else {
//         return a + b;
//     }
// }


function combine(a: number, b: number): number
function combine(a: number, b: string): string
function combine(a: string, b: number): string
function combine(a: string, b: string): string
function combine(a: NumberOrString, b: NumberOrString){
    if(typeof a === "string" || typeof b ==="string") {
        return a.toString() + b.toString()
    } else {
        return a + b;
    }
}

console.log(combine(60, 50));
console.log(combine("Test1", 50));