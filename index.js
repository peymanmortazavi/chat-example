var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log("Received a connection");
  socket.on('chat message', function(msg) {
    io.emit('chat message', msg);
  });
});

http.listen(9393, function(){
  console.log('listening on *:9393');
});
