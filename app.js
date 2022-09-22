const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const path = require('path');
const gameState = {
  players: {}
};
var numplayers = 0;
var port = process.env.PORT || 3000; 
var names = ['Steve', 'Harry', 'Ravi', 'Mahi', 'Guru', 'Micheal', 'Jack', 'Rama', 'Srin', 'Loki', 'Clare', 'Lord'];

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Function to serve all static files
// inside public directory.
app.use(express.static('public')); 
app.use('/images', express.static('public'));

app.get('/photo/:photoRef', function (req, res) {
    res.set({'Content-Type': 'image/png'});
    res.sendFile(__dirname + '/public/' + req.params.photoRef);
});

io.on('connection', (socket) => {
  console.log('a user connected' + numplayers);
  numplayers = numplayers + 1;
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
    if (msg == "START") {
        gameState.players[socket.id].score = 0;
        gameState.players[socket.id].time = 0;
        io.emit('chat message', msg);
        io.emit('chat message', "Player" + gameState.players[socket.id].num + ": " + "Started the game for all");
        io.sockets.emit('state', gameState);
    }
    else if (msg.startsWith("SCORE")) {
        const myArray = msg.split(" ");
        gameState.players[socket.id].score = myArray[1];
        gameState.players[socket.id].time = myArray[2];
        io.sockets.emit('state', gameState);
    }
    else if (msg.startsWith("END")) {
        const myArray = msg.split(" ");
        gameState.players[socket.id].score = myArray[1];
        gameState.players[socket.id].time = myArray[2];
        io.sockets.emit('state', gameState);
        io.sockets.emit('chat message', "Player" + gameState.players[socket.id].num + ": " + "Completed");
    } else {
        io.emit('chat message', "Player" + gameState.players[socket.id].num + ": " + msg);
    }
  });
   socket.on('newPlayer', () => {
    console.log(numplayers);
    var rA = Math.floor(Math.random()*names.length);
    var name = names.splice(rA,1);
    gameState.players[socket.id] = {
    x: 250,
    y: (500 + 30 * numplayers),
    width: 25,
    height: 25,
    num: name,
    score: 0,
    time: 0,
    state: 0
  };
  io.sockets.emit('new', gameState);
  io.sockets.emit('chat message', "Player" + gameState.players[socket.id].num + ": " + "Joined");
  });
  socket.on('disconnect', () => {
    console.log('user disconnected' + numplayers);
    numplayers = numplayers - 1;
    io.sockets.emit('chat message', "Player" + gameState.players[socket.id].num + ": " + "Disconnected");
    io.sockets.emit('undraw', gameState.players[socket.id]);
    names.push(gameState.players[socket.id].num);
    delete gameState.players[socket.id];
    io.sockets.emit('state', gameState);
    
  });
});

server.listen(port, () => {
  console.log('listening on *:3000');
});
