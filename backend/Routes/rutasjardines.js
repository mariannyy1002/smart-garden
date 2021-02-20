const express = require("express");
const router = express.Router();
//                                objeto
const Objeto = require("../Models/jardin.js");
require('../consultas.js');

//Agregar jardín
router.post("/", async (req, res) => {
  const objeto = new Objeto({
    titulo: req.body.datos.titulo,
    desc: req.body.datos.desc,
  });
  try {
    const nuevoObjeto = await objeto.save();
    res.status(201).json(nuevoObjeto);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Seleccionar todos los jardines
router.get("/", async (req, res) => {
  try {
    const objetos = await Objeto.find();
    res.json(objetos);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Seleccionar un jardín por id
router.get("/:id", async (req, res) => {
  try {
    const objetos = await Objeto.findById(req.params.id);
    res.json(objetos);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get("/", async (req, res) => { consultas() });
router.get("/:id", async (req, res) => { consultas() });

//Actualizar un jardín
router.patch("/:id", obtener, async (req, res) => {
  if (req.body.datos.titulo != null) res.objeto.titulo = req.body.datos.titulo;
  if (req.body.datos.desc != null) res.objeto.desc = req.body.datos.desc;
  if (req.body.datos.alertas != null) res.objeto.alertas = req.body.datos.alertas;
  try {
    const objetoAct = await res.objeto.save();
    res.json(objetoAct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Funcion para obtener un jardín por id
async function obtener(req, res, next) {
  let objeto;
    try {
      objeto = await Objeto.findById(req.params.id);
      if (objeto == null) {
        return res.status(400).json({ message: "ID no encontrado" });
      }
      //res.json(objeto);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
    res.objeto = objeto;
    next();
}

module.exports = router;