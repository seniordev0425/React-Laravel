
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


 socket.on('change_price', function(data){
     console.log('hello');
    var tmp = data.split(" ");
     
    console.log(tmp[0] + ' ' + tmp[1] + ' ' + tmp[2]);
    io.emit('change_price', data);
 });
});
