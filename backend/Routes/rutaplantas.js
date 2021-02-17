const express = require("express");
const router = express.Router();
//                                objeto
const Objeto = require("../Models/planta.js");

router.post("/", async (req, res) => {
  const objeto = new Objeto({
    titulo: req.body.datos.titulo,
    desc: req.body.datos.desc,
    tempMin: req.body.datos.tempMin,
    tempMax: req.body.datos.tempMax,
    humMin: req.body.datos.humMin,
    humMax: req.body.datos.humMax,
    luz: req.body.datos.luz,
  });
  try {
    const nuevoObjeto = await objeto.save();
    res.status(201).json(nuevoObjeto);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;