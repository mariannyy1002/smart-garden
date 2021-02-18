const express = require("express");
const router = express.Router();
//                                objeto
const Objeto = require("../Models/area.js");

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
    const objetos = await Objeto.find({'idpadre': req.params.idJ});
    res.json(objetos);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Seleccionar un área por id
router.get("/:idJ/:idA", async (req, res) => {
  try {
    const objetos = await Objeto.findOne({'_id':req.params.idA, 'idpadre': req.params.idJ});
    res.json(objetos);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;