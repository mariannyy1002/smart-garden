const mongoose = require("mongoose");

const objetoSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: false,
  },
  ubicacion: {
    type: Array,
    required: true,
  },
  fechahora: {
    type: String,
    required: false,
  },
  temp: {
    type: Number,
    required: false,
  },
  hum: {
    type: Number,
    required: false,
  },
  luz: {
    type: Number,
    required: false,
  },
});

//                               Objeto
module.exports = mongoose.model("Dispositivo", objetoSchema);
