var express = require("express");
var app = express();
var server = require("http").Server(app);
var io = require("socket.io")(server);

var port = 6677;

// Rutas
app.use(express.static("client"));

app.get("/hola-mundo", function (req, res) {
  res.status(200).send("hola mundo desde una ruta");
});

var messages = [
  {
    id: 1,
    text: "Bienvenido al chat privado de Socket.io y NodeJS",
    nickname: "Bot",
  },
];

// Socket
io.on("connection", function (socket) {
  console.log(
    "El cliente con ip:" + socket.handshake.address + " se ha conectado"
  );

  socket.emit("messages", messages);

  socket.on("add-message", function (data) {
    messages.push(data);

    io.sockets.emit("messages", messages);
  });
});

// Colores consola NodeJS: https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color
server.listen(port, function () {
  console.log(
    "Servidor está funcionando en %s http://localhost:%i %s",
    "\x1b[46m\x1b[30m",
    port,
    "\x1b[0m"
  );
});