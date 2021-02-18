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
});

//                               Objeto
module.exports = mongoose.model("Jardine", objetoSchema);
