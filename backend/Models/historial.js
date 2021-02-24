const mongoose = require("mongoose");

const objetoSchema = new mongoose.Schema({
  idarea: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  fechahora: {
    type: String,
    required: true
  },
  temp: {
    type: Number,
    required: true,
  },
  hum: {
    type: Number,
    required: true,
  },
  luz: {
    type: Number,
    required: true,
  }
});

//                               Objeto
module.exports = mongoose.model("historiale", objetoSchema);
