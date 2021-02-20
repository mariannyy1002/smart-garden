const mongoose = require("mongoose");

const objetoSchema = new mongoose.Schema({
  idpadre: {
    type: String,
    required: true,
  },
  idhijo: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Planta',
    required: true,
  },
  alertas: {
    type: Number,
    required: true,
    default: 0
  }
});

//                               Objeto
module.exports = mongoose.model("PlantaArea", objetoSchema);
