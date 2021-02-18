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
});

//                               Objeto
module.exports = mongoose.model("Dispositivo", objetoSchema);
