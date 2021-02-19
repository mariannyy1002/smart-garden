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
  temp: {
    type: String,
    required: false,
  },
  hum: {
    type: String,
    required: false,
  },
  luz: {
    type: String,
    required: false,
  },
});

//                               Objeto
module.exports = mongoose.model("Dispositivo", objetoSchema);
