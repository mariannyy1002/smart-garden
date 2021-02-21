const express = require("express");
const router = express.Router();
//                                objeto
const Objeto = require("../Models/planta.js");

//Insertar una planta
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

//Seleccionar todas las plantas
router.get("/", async (req, res) => {
  try {
    const objetos = await Objeto.find();
    res.json(objetos);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Seleccionar una planta por id
router.get("/:id", async (req, res) => {
  try {
    const objetos = await Objeto.findById(req.params.id);
    res.json(objetos);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Actualizar una planta
router.patch("/:id", obtener, async (req, res) => {
  if (req.body.datos.titulo != null) res.objeto.titulo = req.body.datos.titulo;
  if (req.body.datos.desc != null) res.objeto.desc = req.body.datos.desc;
  if (req.body.datos.tempMin != null) res.objeto.tempMin = req.body.datos.tempMin;
  if (req.body.datos.tempMax != null) res.objeto.tempMax = req.body.datos.tempMax;
  if (req.body.datos.humMin != null) res.objeto.humMin = req.body.datos.humMin;
  if (req.body.datos.humMax != null) res.objeto.humMax = req.body.datos.humMax;
  if (req.body.datos.luz != null) res.objeto.luz = req.body.datos.luz;

  try {
    const objetoAct = await res.objeto.save();
    res.json(objetoAct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Funcion para obtener una planta por id
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