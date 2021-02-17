//ENCABEZADOS Y VARIABLES
require("dotenv").config();
var express = require("express"); //Express Web Server
var app = express();
const mongoose = require("mongoose");

// Configurar cabeceras y cors
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

//CONEXION A BASE DE DATOS
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Conectado a la Base de Datos"));

//CONFIGURACION DE RUTAS DE SERVIDOR

app.use(express.json());
//        objetos                       objetos
//const rutabases = require("./Routes/rutabases");
////        objeto     objetos
//app.use("/base", rutabases);

const rutaplantas = require("./Routes/rutaplantas");
app.use("/planta", rutaplantas);

//COMANDO DE EJECUCION DE SERVIDOR
var server = app.listen(5000, function () {
  console.log("Servidor escuchando en el puerto 5000");
});
