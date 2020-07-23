/* 
!  HTTP WEB SERVER & EVENT EMITTER
- Create a web server by usign http core module
- declare server as a variable like ( 127.0.0.1 and 8080 )
- use Event emitter
- Subscribe (create) an evendt with the name "ping" 
- When you call event, it will print the message "My first Node.js event has been triggered."
- Output:
    First event: My first Node.js event has been triggered.
    Server running at http://127.0.0.1:8080/
*/


const http = require('http');
const events = require('events');
const myEmitter = new events.EventEmitter();

// Declare server variable
const hostname = '127.0.0.1';
const port = 8080;

//Subscribe for ping event
myEmitter.on('ping', function(data){
    console.log("First event:" + data );
});

// Raising ping event
myEmitter.emit('ping','My first Node.JS event has been triggered!');

// 1st Way: to create server
/* const server = http.createServer((req,res)=>{
    res.statusCode =200;
    res.setHeader('Content-Type','text/plain');
    res.end('Hello, this is Alper\n');
});
 */

 var server = http.createServer();

 server.on('request',function(request, response){
     response.writeHead(200);
     response.write("Hello, this is Alper");
     response.end();
 });

 // ! Listenig Twice:
 server.on('request',function(req,res){
     console.log('New user Request Detected!');
 });

 // ! Listening for Close:
 server.on('close',function(){
     console.log("Closing down the server...!")
 })

 server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${post}/`);
 });


 
// Expose the event emitter:
 module.exports = myEmitter;
