const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const path = require("path");
const app = express();
const server = http.createServer(app);
const io = socketIO(server);
const cors = require("cors");
app.use(cors());
let activeTabs = 0;

// Сервер будет обслуживать статические файлы React-приложения
app.use(express.static(path.join(__dirname, "client/build")));

// Обработка остальных запросов
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});
// Запуск сервера
server.listen(8080, () => {
  console.log("Сервер запущен на порту 8080");
});
io.on("connection", (socket) => {
  console.log(activeTabs);
  activeTabs++;
  io.emit("activeTabsUpdate", activeTabs);

  socket.on("disconnect", () => {
    activeTabs--;
    io.emit("activeTabsUpdate", activeTabs);
  });
});
