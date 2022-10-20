// Command Line Argumnets: 
/*
* process: 
We use the process object to access the command line arguments.
The arguments are abailable as the process.argv member property, which is an array.
*/ 

console.log(process.argv);
// process.nextTick(): Used to put the callback into the next cycle of the nodejs event loop.
process.nextTick(function() {
    console.log('next tick callback function called.');
});
console.log('Immediate');

// Examples of command line arguments

// Excecute this line using 
    // node filename.js || flag is not present 
    // node filename.js value || flag is present 
    if (process.argv[2] && process.argv[2] === '-f') {
    console.log('Flag value is present');
} else {
    console.log('Flag value is not present.');
}

// node 2_commandLineArgument.js one two three four five
const myArgs = process.argv.slice(2);
console.log('myArgs: ', myArgs);

