const express = require("express");
const path = require("path");
const serial = require("./services/controlRobot");
const port = 3000;
const app = express();
const server = require("http").createServer(app);
//const io = require("socket.io")(server);

const iniciarServer = () => {
  let publicPath = path.resolve(__dirname, "../views");
  serial.encender()

  app.use(express.static(publicPath));
  // set the view engine to ejs
  app.set("view engine", "ejs");

  app.get("/", (req, res) => {
    res.render("pages/index.ejs");
  });
  app.get("/foward", (req, res) => {
    serial.enviar("")
  });
  app.get("/rigth", (req, res) => {
    serial.enviar("")
  });
  app.get("/left", (req, res) => {
    serial.enviar("")
  });
  app.get("/back", (req, res) => {
    serial.enviar("")
  });
  app.get("/error", (req, res) => {
    res.render("pages/error.ejs");
  });

  server.listen(port, () => {
    console.log(`El server esta corriendo el puerto:${port}`);
  });
};

iniciarServer();
