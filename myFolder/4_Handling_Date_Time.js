// Getting the current timestamp
/*
let ts = Date.now();

let date_ob = new Date(ts);
let date = date_ob.getDate();
let month = date_ob.getMonth() + 1;
let year = date_ob.getFullYear();

console.log(year + "-" + month + "-" + date);
*/


let date_ob = new Date();

// current date adjust 0 before single digit date
let date = ("0" + date_ob.getDate()).slice(-2);

let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

let year = date_ob.getFullYear();

let hours = date_ob.getHours();

let minutes = date_ob.getMinutes();

let seconds = date_ob.getSeconds();

console.log(year + "-" + month + "-" + date);

console.log(year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds);

console.log(hours + ":" + minutes);

// For color inside the terminal
require('colors');
console.log('hello'.blue);
console.log('hello'.rainbow);