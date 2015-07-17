declare var require:any;

var express = require("express");
var Firebase = require("firebase");
var app = express();
var existingMessages = [];
var port = 8000;

// var fire = new Firebase("https://amber-torch-2607.firebaseio.com");
// console.log(fire);
// setTimeout(function() {
//     fire.get('data', function(error, results){
//         existingMessages = results;
//     });    
// },2000)

 
app.get("/", function(req, res){
    res.send("It works!");
});
 
var io = require('socket.io').listen(app.listen(port));

io.sockets.on('connection', function (socket) {
    socket.emit('message', { message: 'welcome to the chat' });
    
    // append existing messages
    existingMessages.map(function(message) {
           socket.emit('new', message);
    });
    
    socket.on('new', function (data) {
        io.sockets.emit('new', data);
       
        // save existing messages
         existingMessages.push(data);
         
         // save to firebase
        //  fire.set({data: existingMessages});
    });
});

console.log("Listening on port " + port);

