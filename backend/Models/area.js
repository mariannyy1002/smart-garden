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
  dispositivo: {
    type: String,
    required: true,
  },
  idpadre: {
    type: String,
    required: true,
  },
});

//                               Objeto
module.exports = mongoose.model("area", objetoSchema);
