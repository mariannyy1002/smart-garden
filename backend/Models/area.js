const mongoose = require("mongoose");
const PlantaArea = require("./plantaarea");

const objetoSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: false,
  },
  dispositivo: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Dispositivo',
    required: true,
  },
  idpadre: {
    type: String,
    required: true,
  },
  alertas:{
    type: Number,
    required: true,
    default: 0
  }
});

objetoSchema.pre('remove', function(next) {
  PlantaArea.remove({'idpadre': this._id}).exec();
  next();
});

//                               Objeto
module.exports = mongoose.model("area", objetoSchema);
