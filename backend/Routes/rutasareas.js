const express = require("express");
const router = express.Router();
//                                objeto
const Objeto = require("../Models/area.js");
require('../consultas.js');

router.post("/", async (req, res) => {
  const objeto = new Objeto({
    titulo: req.body.datos.titulo,
    desc: req.body.datos.desc,
    dispositivo: req.body.datos.dispositivo,
    idpadre: req.body.datos.idpadre,
  });
  try {
    const nuevoObjeto = await objeto.save();
    res.status(201).json(nuevoObjeto);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Seleccionar todas las áreas de un jardín
router.get("/:idJ", async (req, res) => {
  try {
    const objetos = await Objeto.find({'idpadre': req.params.idJ}).populate('dispositivo');
    res.json(objetos);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Seleccionar un área por id
router.get("/:idJ/:idA", async (req, res) => {
  try {
    const objetos = await Objeto.findOne({'_id':req.params.idA, 'idpadre': req.params.idJ}).populate('dispositivo');
    res.json(objetos);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//router.get("/:idJ", async () => { consultas() });
//router.get("/:idJ:/idA", async () => { consultas() });

//Actualizar un área
router.patch("/:id", obtener, async (req, res) => {
  if (req.body.datos.titulo != null) res.objeto.titulo = req.body.datos.titulo;
  if (req.body.datos.desc != null) res.objeto.desc = req.body.datos.desc;
  if (req.body.datos.dispositivo != null) res.objeto.dispositivo = req.body.datos.dispositivo;
  if (req.body.datos.alertas != null) res.objeto.alertas = req.body.datos.alertas;
  try {
    const objetoAct = await res.objeto.save();
    res.json(objetoAct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Funcion para obtener un área por id
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