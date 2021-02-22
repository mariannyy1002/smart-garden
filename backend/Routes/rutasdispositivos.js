const express = require("express");
const router = express.Router();
//                                objeto
const Objeto = require("../Models/dispositivo.js");

router.post("/", async (req, res) => {
  const objeto = new Objeto({
    titulo: req.body.datos.titulo,
    desc: req.body.datos.desc,
    ubicacion: req.body.datos.ubicacion,
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

//Seleccionar todos los dispositivos
router.get("/", async (req, res) => {
  try {
    const objetos = await Objeto.find();
    res.json(objetos);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Seleccionar un dispositivo por id
router.get("/:id", async (req, res) => {
  try {
    const objetos = await Objeto.findById(req.params.id);
    res.json(objetos);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Actualizar un dispositivo
router.patch("/:id", obtener, async (req, res) => {
  if (req.body.datos.titulo != null) res.objeto.titulo = req.body.datos.titulo;
  if (req.body.datos.desc != null) res.objeto.desc = req.body.datos.desc;
  if (req.body.datos.ubicacion != null) res.objeto.ubicacion = req.body.datos.ubicacion;
  try {
    const objetoAct = await res.objeto.save();
    res.json(objetoAct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

/*//Eliminar un dispositivo
router.delete("/:id", obtener, async (req, res) => {
  try {
    await res.objeto.remove();
    res.json({
      message: "Producto Eliminado",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});*/

//Funcion para obtener un dipositivo por id
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