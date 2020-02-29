var app = require("express")();
var http = require("http").createServer(app);
var io = require("socket.io")(http);

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", function(socket) {
  console.log("a user connected");
  socket.on("disconnect", function() {
    console.log("user disconnected");
  });
  socket.on("chat message", function(msg) {
    console.log("message: " + msg);
    socket.broadcast.emit("chat message", msg);
    // use io.emit instead of socket.broadcast to send to all sockets
  });
});

io.on("connection", function(socket) {});

http.listen(3000, function() {
  console.log("listening on *:3000");
});
