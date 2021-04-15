//ENCABEZADOS Y VARIABLES
require("dotenv").config();
var express = require("express"); //Express Web Server
var cors = require('cors')
var app = express();
const mongoose = require("mongoose");

// Configurar cabeceras y cors
app.use(cors());

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
app.use("/historiales", require("./Routes/rutashistoriales"));

var PORT = process.env.PORT

//COMANDO DE EJECUCION DE SERVIDOR
var server = app.listen(PORT, function () {
  console.log("Servidor escuchando en el puerto" + PORT);
});
