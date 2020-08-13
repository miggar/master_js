"use strict";

var mongoose = require("mongoose");
var app = require("./app");
var port = 3700;

mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb://localhost:27017/portafolio")
  .then(() => {
    console.log("• Establecida la conexión con la ddbb.");

    // Launch server
    app.listen(port, () => {
      console.log("• Servidor levantado correctamente en localhost:3700");
    });
  })
  .catch((err) => console.error(err));
