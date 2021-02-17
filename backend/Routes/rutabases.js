const express = require("express");
const router = express.Router();
//                                objeto
const Objeto = require("../Models/base.js");

router.post("/", async (req, res) => {
  const objeto = new Objeto({
    dato1: req.body.datos.dato1,
    dato2: req.body.datos.dato2,
  });
  try {
    const nuevoObjeto = await objeto.save();
    res.status(201).json(nuevoObjeto);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;