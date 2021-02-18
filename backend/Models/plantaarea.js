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
});

//                               Objeto
module.exports = mongoose.model("PlantaArea", objetoSchema);
