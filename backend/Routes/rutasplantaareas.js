const express = require("express");
const router = express.Router();
//                                objeto
const Objeto = require("../Models/plantaarea.js");
require('../consultas.js');

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
    //console.log(objetos)
    res.json(objetos);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Seleccionar un plantaarea
router.get("/a/:id", async (req, res) => {
  try {
    const objetos = await Objeto.findById(req.params.id);
    res.json(objetos);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Remover planta de área
router.delete("/:id", obtener, async (req, res) => {
  try {
    await res.objeto.remove();
    res.json({
      message: "Producto Eliminado",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/:idA", async () => { consultas() });

router.patch("/:id", obtener, async (req, res) => {
  if (req.body.datos.alertas != null) res.objeto.alertas = req.body.datos.alertas;
  try {
    const objetoAct = await res.objeto.save();
    res.json(objetoAct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

async function obtener(req, res, next) {
  let objeto;
    try {
      objeto = await Objeto.findById(req.params.id);
      if (objeto == null) return res.status(400).json({ message: "ID no encontrado" });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
    res.objeto = objeto;
    next();
}

module.exports = router;