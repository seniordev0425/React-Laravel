// var http = require('http');
// var server = http.createServer(function(req, res) {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     var message = 'It works!\n',
//         version = 'NodeJS ' + process.versions.node + '\n',
//         response = [message, version].join('\n');
//     res.end(response);
// });
// server.listen();

// var socket  = require( 'socket.io' );
// var express = require('express');
// var app     = express();
// var server  = require('http').createServer(app);
// var io      = socket.listen( server );
// var port    = process.env.PORT || 3000;

// server.listen(port, function () {
//   console.log('Server listening at port %d', port);
// });

// app.get('/app', function(req, res){
//     res.send('hello hahaha');
// });

// io.on('connection', function (socket) {
//   console.log('hello world');
//   socket.on( 'new_count_message', function( data ) {
//     io.sockets.emit( 'new_count_message', { 
//     	new_count_message: data.new_count_message

//     });
//   });

//   socket.on( 'update_count_message', function( data ) {
//     io.sockets.emit( 'update_count_message', {
//     	update_count_message: data.update_count_message 
//     });
//   });

//   socket.on( 'new_message', function( data ) {
//     io.sockets.emit( 'new_message', {
//     	name: data.name,
//     	email: data.email,
//     	subject: data.subject,
//     	created_at: data.created_at,
//     	id: data.id
//     });
//   });

  
// });


var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var redis = require('redis');
 
server.listen(65432);

app.get('/app', function(req, res){
    res.send('hello');
});

io.on('connection', function (socket) {
  //io.emit('message', 'hello world');
  console.log("hello world");
//   var redisClient = redis.createClient();
//   redisClient.subscribe('message');
 
//   redisClient.on("message", function(channel, message) {
//     console.log("mew message in queue "+ message + "channel");
//     socket.emit(channel, message);
//   });
 
//   socket.on('disconnect', function() {
//     redisClient.quit();
//   });

 socket.on('change_price', function(data){
     console.log('hello');
    var tmp = data.split(" ");
     
    console.log(tmp[0] + ' ' + tmp[1] + ' ' + tmp[2]);
    io.emit('change_price', data);
 });
});
