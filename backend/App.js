//ENCABEZADOS Y VARIABLES
require("dotenv").config();
var express = require("express"); //Express Web Server
var app = express();
const mongoose = require("mongoose");

//CONEXION A BASE DE DATOS
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Conectado a la Base de Datos"));

//CONFIGURACION DE RUTAS DE SERVIDOR

app.use(express.json());
//        objetos                       objetos
const rutabases = require("./Routes/rutabases");
//        objeto     objetos
app.use("/base", rutabases);

//COMANDO DE EJECUCION DE SERVIDOR
var server = app.listen(5000, function () {
  console.log("Servidor escuchando en el puerto 5000");
});
