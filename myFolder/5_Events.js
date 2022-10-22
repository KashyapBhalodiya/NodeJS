// Event module has one simple class EventEmitter

// * EventEmitter Class
// It is a class designed to make it easy to emi events and subscribe to raised events.

// * Simple Example for one subscriber
var EventEmitter = require('events').EventEmitter;

// Create an instance using new EventEmitter
var emitter1 = new EventEmitter();

// subscribe: subscribe to events we used on function
emitter1.on('foo', function(arg1, arg2) {
    console.log('Foo raised, Args: ', arg1, arg2);
});
// Emit: Raised the event using emit function
emitter1.emit('foo', {a: 123}, {b: 456});

// * For multiple subscriber
var emitter2 = new EventEmitter();

emitter2.on('foo', function() {
    console.log('Subscriber1');
});
emitter2.on('foo', function() {
    console.log('Subscriber2');
});
emitter2.emit('foo');

// * Unsubscribing: removeListner function that takes an event name followed by a function object

var emitter3 = new EventEmitter();
var fooHandler = function() {
    console.log('Handled called');
    // unsubscribe
    emitter3.removeListener('foo', fooHandler);
};
emitter3.on('foo', fooHandler);
// * In this case the second event goes unnoticed
emitter3.emit('foo');
emitter3.emit('foo');

// * For only one time event listner will called using once function.
emitter3.once('foo', function () {
    console.log('foo has been raised');
});
emitter3.emit('foo');
emitter3.emit('foo');

