/* 
! Event Emitters Class inside Node JS:

! What is EventEmitter?
Node.js allows us to create and handle custom events easily by using events module.
Event module includes EventEmitter class which can be used to raise and handle custom events.


! Who is responbisle to generate events in Node JS Application?
EventEmitter class is responsible to generate events.
Generating events is also known Emitting!
That's why this class name is EventEmiiter as it emits events in Node JS

Node JS uses two components to take of events:
1- EventEmiter Class : responsible to generate Events
2- JS Callback Functions : responsible to handle them

EventEmitter => Event Queue => Event Loop => Event Handles

! First thing to start Node JS Evnets is that require (import) "evenst" module:
     var events = require('events');

! Then use this events variable and create an object of EventEmitter class:
    var eventsEmitter = new events.EventEmitter();


*/


// Example for eventEmitter class for raising and handling a custom event:

// STEP 1: DEFINITION PART:------------------------------------------

// get the reference of eventEmitter class of events module
var events = require('events');
// create an object of EventEmitter class by using above reference
var myEventEmitter  = new events.EventEmitter();

function FbW10(){
    console.log('We are learning EventEmitter!');
}

// STEP 2: ON() - CREATE YOUR EVENT (Bind an Event with Event Handler Function)-------------------

/*  
! EventEmitter "on()" function:
EventEmitter class has a "on()" function, which is used to bind an Event with Event Handler JS function!

It takes two parameters:

eventsEmitter.on(NameOfEvenetToBind, EventHandlerFunction);
*/


myEventEmitter.on('myClass',FbW10);


// STEP 3: EMIT() - TAKE ACTION!--------------------------------------------------------------
/* 
! EventEmitter "emit()" function:
EventEmitter class has a "emit()" function, which is used to create an Event. 

It takes one paramter:
eventsEmitter.on(NameOfEvenetToBind);

*/

myEventEmitter.emit('myClass'); // Ouput : We are learning EventEmitter!

myEventEmitter.emit('myClass'); // Ouput : We are learning EventEmitter!

myEventEmitter.emit('myClass'); // Ouput : We are learning EventEmitter!