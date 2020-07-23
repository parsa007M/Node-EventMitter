/* 
! TASK: Node JS Events Example

- Create Node JS Project
- Create a package.json file like below:

    package.json:
    {
        "name":"events",
        "version":"1.0.0", 
        "description":"events example",
        "main":"events",
        "author":"AlperBlog",
        "dependency":{
            "node":""
        }
    }

- Create a text file "AlperBlog.txt" with the following content:
    AlperBlog.txt:  
    ------------------------------
        Dear, AlperBlog Readers.
        Thank You for your support.
    ------------------------------

- We are going to use this file to test Node JS Events
- Create a JavaScript file with name events.js
- When you write "node events.js" in terminal, the output will be:
-------------------------------
    alper@alper-ThinkPad-L480:~/Documents/01.DCI/08.NODEJS/02.Lessons_2020/L6-20200712/Events_Alper$ node events.js

1-(readFileContent)=>    Reading AlperBlog.txt file started:
2-(readFile)=>           Reading undefined file done successfully.
3-(displayFileContent)=> File Data:

3-(displayFileContent)=> Dear, AlperBlog Readers. 
3-(displayFileContent)=> Thank You for your support.

Reading and Printing File content job is done successfully.

-------------------------------

Hint: 
- You will need some core modules in NodeJS
- There will be 4 different function (
    readFileContent: read your external file
    displayFileContent: You will show the message "File Data:" and call your finished emitter
    finished: write message "Reading and Printing File content job is done successfully."
    readFile: write message "Reading (file name) done successfully."
    )
- You need to create 3 different emitter for read, display, finished!
*/

// STEP 1: DEFINITION

var fs = require('fs');
var events = require('events');
var eventsEmitter = new events.EventEmitter();

// STEP 2: CREATE YOUR EVENTS AND BIND WITH HANDLE FUNCTION (SUBCRIPTION)

// We have binded "read" event with "readFileContent" Event Handler function using on() method of eventemmitter class
eventsEmitter.on('read',readFileContent);
// We have binded "display" event with "displayFileContent" Event Handler function using on() method of eventemmitter class
eventsEmitter.on('display', displayFileContent);
// We have binded "finished" event with "finished" Event Handler function using on() method of eventemmitter class
eventsEmitter.on('finished',finished);

// STEP 3: RAISE YOUR EVENT

// we have written JS functions, we use them as Event Handler functions

eventsEmitter.emit('read','AlperBlog.txt');

function readFileContent(fileName){
    console.log("Reading"+fileName+"file started:");
    fs.readFile(fileName, 'utf8', readFile)
}

function readFile(err, data, fileName){
    console.log("Reading"+fileName+"file done successfully.");
    eventsEmitter.emit('display', data);
}

function displayFileContent(data){
    console.log("File Data:");
    console.log(data);
    eventsEmitter.emit('finished');
}

function finished(){
    console.log("Reading and Printing File content job is done successfully.");
}
