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
  alertas: {
    type: Number,
    required: true,
    default: 0
  }
});

//                               Objeto
module.exports = mongoose.model("Jardine", objetoSchema);
