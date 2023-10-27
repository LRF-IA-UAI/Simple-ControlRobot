const express = require("express");
const path = require("path");
const port = 3000;
const app = express();
const server = require("http").createServer(app);
//const io = require("socket.io")(server);

const iniciarServer = () => {
  var publicPath = path.resolve(__dirname, "../views");
  app.use(express.static(publicPath));
  // set the view engine to ejs
  app.set("view engine", "ejs");

  app.get("/", function (req, res) {
    res.render("pages/index.ejs");
  });
  app.get("/foward", function (req, res) {
    res.render("pages/error.ejs");
  });
  app.get("/error", function (req, res) {
    res.render("pages/error.ejs");
  });
  app.get("/error", function (req, res) {
    res.render("pages/error.ejs");
  });
  app.get("/error", function (req, res) {
    res.render("pages/error.ejs");
  });

  server.listen(port, () => {
    console.log(`El server esta corriendo el puerto:${port}`);
  });
};

iniciarServer();
