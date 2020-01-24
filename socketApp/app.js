// var http = require('http');
// var server = http.createServer(function(req, res) {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     var message = 'hello world!\n',
//         version = 'NodeJS ' + process.versions.node + '\n',
//         response = [message, version].join('\n');
//     res.end(response);
// });
// server.listen();

// var port = process.env.PORT || 80;


// var app = require('express')();
// var http = require('http').createServer(app);
// var io = require('socket.io')(http);

// const hostname = '176.9.150.187';
// const port = '65432';

// http.listen(port, hostname, () => {
  
// });

// app.get('/app', function(req, res){
//     res.send('hello worlddd');
// });

// io.on('connection', function(socket){
//     console.log('I am socket client');
//   socket.emit('test', 'hello world');
// });


var socket  = require( 'socket.io' );
var express = require('express');
var app     = express();
var server  = require('http').createServer(app);
var io      = socket.listen( server );
var port    = process.env.PORT || 3000;

server.listen(port, function () {
  console.log('Server listening at port %d', port);
});

app.get('/app', function(req, res){
    res.send('hello kuku');
});

io.on('connection', function (socket) {
  console.log('hello world');
  socket.on( 'new_count_message', function( data ) {
    io.sockets.emit( 'new_count_message', { 
    	new_count_message: data.new_count_message

    });
  });

  socket.on( 'update_count_message', function( data ) {
    io.sockets.emit( 'update_count_message', {
    	update_count_message: data.update_count_message 
    });
  });

  socket.on( 'new_message', function( data ) {
    io.sockets.emit( 'new_message', {
    	name: data.name,
    	email: data.email,
    	subject: data.subject,
    	created_at: data.created_at,
    	id: data.id
    });
  });

  
});
