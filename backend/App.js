//ENCABEZADOS Y VARIABLES
require("dotenv").config();
var express = require("express"); //Express Web Server
var cors = require('cors')
var app = express();
const mongoose = require("mongoose");

// Configurar cabeceras y cors
app.use(cors())/*
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE, PATCH');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE, PATCH');
  next();
});*/

//CONEXION A BASE DE DATOS
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Conectado a la Base de Datos"));

//CONFIGURACION DE RUTAS DE SERVIDOR
app.use(express.json());

//RUTAS
app.use("/jardines", require("./Routes/rutasjardines"));
app.use("/areas", require("./Routes/rutasareas"));
app.use("/dispositivos", require("./Routes/rutasdispositivos"));
app.use("/plantas", require("./Routes/rutasplantas"));
app.use("/plantaareas", require("./Routes/rutasplantaareas"));
app.use("/alertas", require("./Routes/rutasalertas"));

//CONSULTAS

//COMANDO DE EJECUCION DE SERVIDOR
var server = app.listen(5000, function () {
  console.log("Servidor escuchando en el puerto 5000");
});
