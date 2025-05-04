import { io } from "./app.js"; // Import the Socket.IO server instance
import { Server } from "socket.io"; // Import the Socket.IO server class

io.on("connection", (socket) => {
  socket.emit("message", "Welcome to the chat!"); // Send a welcome message to the client
  console.log("A user connected"); // Log when a user connects
  socket.on("disconnect", () => {
    console.log("A user disconnected"); // Log when a user disconnects
  });
  socket.on("chat message", (msg) => {
    console.log("Message received: " + msg); // Log the received message
  });
});
