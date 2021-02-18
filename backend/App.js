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

//               objeto                            objetos
app.use("/agregarplanta", require("./Routes/agregarplantas"));
app.use("/agregardispositivo", require("./Routes/agregardispositivos"));
app.use("/agregarjardin", require("./Routes/agregarjardines"));
app.use("/agregararea", require("./Routes/agregarareas"));
app.use("/agregarplantaarea", require("./Routes/agregarplantaareas"));


//COMANDO DE EJECUCION DE SERVIDOR
var server = app.listen(5000, function () {
  console.log("Servidor escuchando en el puerto 5000");
});
