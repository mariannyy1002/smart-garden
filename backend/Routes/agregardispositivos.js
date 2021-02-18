const express = require("express");
const router = express.Router();
//                                objeto
const Objeto = require("../Models/dispositivo.js");

router.post("/", async (req, res) => {
  const objeto = new Objeto({
    titulo: req.body.datos.titulo,
    desc: req.body.datos.desc,
    ubicacion: req.body.datos.ubicacion,
  });
  try {
    const nuevoObjeto = await objeto.save();
    res.status(201).json(nuevoObjeto);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;