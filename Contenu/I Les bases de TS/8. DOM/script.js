"use strict";
// Type Assertion
// let txt:string;
// txt = 'str';
// Assertion
// const form : HTMLFormElement = document.querySelector('form')!
// console.log(form.children);
// Type Casting
const form = document.querySelector('form');
console.log(form.children);
const input = document.querySelector('input');
form.addEventListener('submit', handleSubmit);
function handleSubmit(e) {
    e.preventDefault();
    console.log("SUBMITTED");
}
window.addEventListener('click', handleClick);
function handleClick(e) {
    console.log(e.clientX, e.clientY);
}
const paragraphList = document.querySelectorAll('p');
// console.log(paragraphList);
