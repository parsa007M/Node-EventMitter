/* 
! TASK: QUEUE MATIC 
- Let's say you are in the bank or ( Ausländerbehörde) and you are on the queues!
- There is a screen on the wall
- Each person has just 2000ms = 2 second
- use setTimeout method to set the time
- Also, use Event module and EventEmitter class

- Print below messages by using terminal (screen):
    ! Output:
            The process is started for customer 1
            Processing number:1
            Completed processing 1
            The process is started for customer 2
            Processing number:2
            Completed processing 2
            The process is started for customer 3
            Processing number:3
            Completed processing 3 

*/

// Step 1: Define your Modules

// ! 1st Way:
const events = require('events');
const EventEmitter = new events.EventEmitter();

// ! 2nd Way:
/* var emitter = require('events').EventEmitter;
var e = new emitter(); */

// Step 2: Take action with handle function

function LoopProcessor1(num){

    setTimeout(function(){
        for( var i=1; i <= num; i++){
            // first ew create an object of EventEmitter class and then , use it to emit "BeforeProcess" and "AfterProcess" events

            EventEmitter.emit('BeforeProcess',i); // 1st message line

            console.log("Processing number:"+i); // 2nd message line

            EventEmitter.emit('AfterProcess',i);
        }
    },2000)

    // So, we need to return an object of EventEmitter from the function!
    return EventEmitter;
}

// Step 3: Create your events

// We use the return value of LoopProcessor function to bind these events using on() / addLister() methods!
var loop1 = LoopProcessor1(3);

loop1.on('BeforeProcess',function(data){
    console.log("The process is started for "+ data);
});

loop1.on('AfterProcess',function(data){
    console.log("Completed processing"+ data);
});