const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");

const PORT = 3000;

const server = http.createServer(app);
const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
    socket.broadcast.emit("connection", "a user connected");
//   io.emit("connection", "a user connected");
  console.log("a user connected");

  socket.on('disconnect', ()=> {
    console.log('user disconnected');
    io.emit('disconnected', 'browser user disconnected')
  })

  socket.on('chat message', (msg) => {
    console.log('message:' + msg), //this is for terminal (server)
    io.emit('chat message', msg) // this is for browser (client)
  })
});

server.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});
