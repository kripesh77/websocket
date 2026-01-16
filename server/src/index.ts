import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", function (socket) {
  console.log("User connected");
  setInterval(function () {
    socket.send("Current price of solana is: " + Math.random() * 100);
  }, 500);

  socket.on("message", (e) => {
    console.log(e.toString());
  });
});
