var events = require('events');
var EventEmitter = events.EventEmitter;

var chat = new EventEmitter;
var users = [], chatlog = [];

// Subcribe first event
chat.on('message', function(message){
    chatlog.push(message);
    console.log(message);
});

// Subcribe second event
chat.on('join', function(nickname){
    users.push(nickname);
    console.log(nickname);
});

// Raise your event
chat.emit('join', 'Car');
chat.emit('message','Hello')

