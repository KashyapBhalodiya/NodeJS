/* Node JS
It is an open source environment
powerful client side scripting language
Light weight and cross platform
It runs various platforms (windows, Linux, Unix, Mac OS)
It uses JavaScript on the server
It uses asynchronous programming

A common task for a web server can be to opem a file on the server and return the content to the client.

Applications of javascript:
-> Client side validation
-> Enhancing the iteraction of a user with the webpage
-> Dynamic drop down menus
-> Displaying date and time
-> Displaying pop up windows and dialog boxes
-> Perform calculations

How the NodeJS handles a file request:
1) Sends the task to the computer's file system
2) Ready to handle the next request.
3) When the file system has opened and read the file the server returns the content to the client

NOTE: It eliminates the waiting and simply continues the next request. It runs single-threaded, non-blocking, 
asynchronous programming which is very memory efficient.

What can NodeJS Do?
Node.js can generate dynamic page content
Node.js can create, open, read, write, delete, and close files on the server
Node.js can collect form data
Node.js can add, delete, modify data in your database

*/

// Hello World program
// start this program in web browser: http://localhost:8080/ 
// var http = require('http');

// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.end('Hello World');
// }).listen(8080)

// Module: A set of functions you want to include in your applications.

// How to include the modules? => use the require() function with the name of the module
// var http = require('http');

// Now then we create the server using createServer

// Also we can create own modules
// Use the exports keyword to make properties and methods available outside the module file.
// Save the code in a file called myfilemodule.js
// exports.myDateTime = function() {
//     return Date();
// };

// web server: HTTP module can create an HTTP server that listens to server ports and gives a responce back to the client.
// Use the createServer() method to create an HTTP server.

// --------------------------------------------------------------------------------------

// Global Objects: 
/*
We don't need to include these objects in your application.
__dirname
__filename
console
process
Buffer
setImmediate(callback[, arg][, ...])
setInterval(callback, delay[, arg][, ...])
setTimeout(callback, delay[, arg][, ...])
clearImmediate(immediateObject)
clearInterval(intervalObject)
clearTimeout(timeoutObject)
*/

// Node JS timer: Global functions
// setImmediate(callback[, arg][, ...])
// setInterval(callback, delay[, arg][, ...])
// setTimeout(callback, delay[, arg][, ...])
// clearImmediate(immediateObject)
// clearInterval(intervalObject)
// clearTimeout(timeoutObject)

// setInterval(function() {
//     console.log("After 1 millisecond");
// }, 1000);

// setTimeout(function() {
//     console.log("1 millisecond after excecute");
// })

// function welcome () {  
//     console.log("Welcome to JavaTpoint!");  
// }  
// var id1 = setTimeout(welcome,1000);  
// var id2 = setInterval(welcome,1000);  
// clearTimeout(id1);  

// Errors:
/*
Standard Javascript errors: evalerror, syntaxerror, referenceerror, rangeerror, typeerror, etc
syntax errors
user-specified errors
assertion errors
*/

// DNS: DNS module contains method to get information of given hostname. 
// dns.getServers(), dns.setServers(servers), dns.lookup(hostname[, options], callback), dns.resolve(hostname[, rrtype], callback)

// Net: It provides ability to socket programming.
// const net = require('net');
// const client = net.connect({port: 8080}, () => {
//     console.log('connected to server\n');
//     client.write('world\n');
// });
// client.on('data', (data) => {
//     console.log(data.toString());
//     client.end();
// });
// client.on('end', () => {
//     console.log('Disconnected from server');
// });

// Crypto: It supports cryptography.
