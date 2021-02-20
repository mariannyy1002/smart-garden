const mongoose = require("mongoose");

const objetoSchema = new mongoose.Schema({
  alertas: {
    type: Number,
    required: true,
    default: 0
  }
});

//                               Objeto
module.exports = mongoose.model("Alerta", objetoSchema);
