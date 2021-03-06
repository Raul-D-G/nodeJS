require("dotenv").config();
const express = require("express");
const socketio = require("socket.io");
const http = require("http");

const userRouter = require("./api/users/user.router");
const transporturiRouter = require("./api/transporturi/transport.router");
const tranzactiiRouter = require("./api/tranzactii/tranzactii.router");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.all("/*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With, Origin, Accept"
  );
  next();
});

app.use("/api/users", userRouter);
app.use("/api/transporturi", transporturiRouter);
app.use("/api/tranzactii", tranzactiiRouter);
var users = [];
const server = http.createServer(app);

const io = socketio(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("User connected", socket.id);

  socket.on("setSocketId", (idUser) => {
    users[idUser] = socket.id;
  });

  socket.on("dorescTransport", (msg) => {
    const data = {
      idExpeditor: msg.idExpeditor,
      idTransportator: msg.idTransportator,
      transport: msg.transport,
    };
    var socketId = users[data.idExpeditor];
    socket.to(socketId).emit("ofertaTransport", data);
  });

  socket.on("respingereTransportator", (resping) => {
    idTransportator = resping.idTransportator;
    var socketId = users[idTransportator];
    socket.to(socketId).emit("respingere", resping);
  });

  socket.on("acceptaTrasnport", (accepta) => {
    idTransportator = accepta.idTransportator;
    var socketId = users[idTransportator];
    socket.to(socketId).emit("acceptare", accepta);
  });
});

server.listen(process.env.APP_PORT, () => {
  console.log("Server up and running", process.env.APP_PORT);
});
