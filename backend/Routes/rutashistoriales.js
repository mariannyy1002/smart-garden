const express = require("express");
const router = express.Router();
//                                objeto
const Objeto = require("../Models/historial.js");

//Agregar historial a dispositivo
router.post("/:id", async (req, res) => {
  const objeto = new Objeto({
    idarea: req.params.id,
    fechahora: req.body.datos.fechahora,
    temp: req.body.datos.temp,
    hum: req.body.datos.hum,
    luz: req.body.datos.luz,
  });
  try {
    const nuevoObjeto = await objeto.save();
    res.status(201).json(nuevoObjeto);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Ver todo el historial de un dispositivo
router.get("/:id", async (req, res) => {
  try {
    const objetos = await Objeto.findById(req.params.id);
    res.json(objetos);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;