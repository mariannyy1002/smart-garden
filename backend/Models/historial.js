const mongoose = require("mongoose");

const objetoSchema = new mongoose.Schema({
  idarea: {
    type: String,
    required: true,
  },
  fechahora: {
    type: String,
    required: true
  },
  temp: {
    type: String,
    required: true,
  },
  hum: {
    type: String,
    required: true,
  },
  luz: {
    type: String,
    required: true,
  }
});

//                               Objeto
module.exports = mongoose.model("historiale", objetoSchema);
