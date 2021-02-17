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
  dato3: {
    type: String,
    required: true,
  },
});

//                               Objeto
module.exports = mongoose.model("Base", objetoSchema);
