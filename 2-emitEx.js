// STEP 1: DEFINITION PART

var events = require ('events');
var newEventEmitter = new events.EventEmitter();

// ! we define a parameter named "msj"

function FbW10(msj){
    console.log(msj);
}

// STEP 2: CREATE YOUR EVENT (Subcribe for the Event)

newEventEmitter.on('Heyy',FbW10)

// STEP 3: TAKE ACTION ( Raising Events)

newEventEmitter.emit('Heyy', 2+2) // Output: 4

newEventEmitter.emit('Heyy','This is my new message to FbW10!'); // Output: This is my new message to FbW10!

newEventEmitter.emit('Heyy',function abc(){
    console.log("Hellooo FbW10!");
}); // Output : [Function: abc]