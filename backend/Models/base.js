const mongoose = require("mongoose");

const objetoSchema = new mongoose.Schema({
  dato1: {
    type: String,
    required: true,
  },
  dato2: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Objeto", objetoSchema);
