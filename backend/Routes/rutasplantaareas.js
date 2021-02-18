const express = require("express");
const router = express.Router();
//                                objeto
const Objeto = require("../Models/plantaarea.js");
const Planta = require("../Models/planta.js");

router.post("/", async (req, res) => {
  const objeto = new Objeto({
    idpadre: req.body.datos2.idpadre,
    idhijo: req.body.datos2.idhijo,
  });
  try {
    const nuevoObjeto = await objeto.save();
    res.status(201).json(nuevoObjeto);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Seleccionar todas las plantas de un área
router.get("/:idA", async (req, res) => {
  try {
    const objetos = await Objeto.find({'idpadre': req.params.idA}).populate('idhijo');
    res.json(objetos);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;