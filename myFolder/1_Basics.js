// Variables: Numbers, Boolean, Arrays, Object literals ({})

// Functions
function foo() {
    return 123;
}
console.log(foo());

// Immediately executing function: You can excecute a function immediately after you define it.
(function Immediately() {
    console.log("Itself function is called.");
})();

// Anonymous Function: we can assign a function to a variable.
var f1 = function function1() {
    console.log('Hey');
}
f1();

// Higher-Order functions: JavaScript allows us to assign function to variables,
// we can pass function to other functions. Ex: setTimeout

setTimeout(function () {
   console.log("After 2 second it will excecute."); 
}, 2000);

// Closures: Whenever we have a function defined inside another function, 
// the inner function has access to the variables declared in the outer function.

// function outerFun(arg) {
//     var variableInOuterFun = arg;
//     function bar() {
//         console.log(variableInOuterFun); // Access the variable from the outer scope
//     }
//     bar();
// }
// outerFun('Closure example');


function outerFun(arg) {
    var variableInOuterFun = arg;
    return function() {
        console.log(variableInOuterFun); // Access the variable from the outer scope
    }
}
var innerFun = outerFun('Closure example');
console.log(innerFun());

// null: It is a special JS object used to denote an empty object.
// undefined: Whenever we don't initialized the value then undefined is generated.

// this: It refers to an object that is excecuting the current function.
var obj = {
    bar: 123,
    bas: function() {
        console.log('Inside bar value is: ', this.bar);
    }
}
console.log(obj.bas());

function f1() {
    this.f1 = 123;
    console.log("Is this Global?: ", this == global);
}
console.log(f1());
console.log(global.f1);

// prototype: Every object in JS has an internal link to another object called the prototype.
var pro = {};
pro.__proto__.bar = 123;
console.log(pro.bar);

// Error handling: keywords=> try, catch, throw, finally

try {
    setTimeout (function() {
        console.log('About to throw an error');
        // throw new Error('Error thrown');
    }, 2000);
}
catch(e) 
{
    console.log('I will never excecute');
}
finally {
    console.log('I am always excecutes.');
}

//////////////////////////////////////////////////////////////////////////////
/*
    * Node JS File based module system
    -> Each file is its own module
    -> Each file access to the current module definition using the module variable.
    -> The export of current module is determined by the module.exports variable.
    -> To import a module use the globally available require function.
*/

// We can access this module in another file
module.exports = function() {
    console.log('A function is file Basics.js');
};

// * Require function:
/*
It is the main way of importing a module into the current file.
Three modules: core, file, external
*/

/* 
* Important Gloabls
console, timers, __filename, __dirname, process
*/

// Buffer - available globally
// It is used to perform operations on raw binary data

var str = "Hello Buffer World";
var buffer = new Buffer(str, 'UTF-8');
var roundTrip = buffer.toString('utf-8');
console.log(roundTrip);

// global

console.log(console == globla.console);
console.log(setInterval == global.setInterval);
console.log(process == global.process);

