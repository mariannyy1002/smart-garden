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
  tempMin: {
    type: Number,
    required: true,
  },
  tempMax: {
    type: Number,
    required: true,
  },
  humMin: {
    type: Number,
    required: true,
  },
  humMax: {
    type: Number,
    required: true,
  },
  luz: {
    type: Array,
    required: true,
  },
});

//                               Objeto
module.exports = mongoose.model("Planta", objetoSchema);
