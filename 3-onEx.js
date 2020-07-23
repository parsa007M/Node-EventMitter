// Example with a couple of CallBacks:

// ! on / addEventLister method:

// STEP 1: DEFINITION-----------------------

// ! 1st Way: DEFINITION:
/* var events = require ('events');
var newEventEmitter = new events.EventEmitter(); */

// ! 2nd Way: DEFINITION:
var emitter = require('events').EventEmitter;
var em = new emitter();

// STEP 2: SUBCRIPTION-----------------------

// Subcribe First Event
em.on('FirstEvent', function(data){
    console.log('First subcriber:'+data);
});

// Subcribe Second Event
em.addListener('SecondEvent',function(data){
    console.log('Seoond subcriber:'+data);
}); 

// STEP 3: RAISE YOUR EVENT-----------------

// Raising First event
em.emit('FirstEvent', 'This is my first Event Emitter Example!') // Output: First subcriber:This is my first Event Emitter Example!

// Raising Second event
em.emit('SecondEvent', 'This is my second Event Emitter Example!') // Output: Second subcriber:This is my second Event Emitter Example!




