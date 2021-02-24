const mongoose = require("mongoose");
const Area = require("./area");

const objetoSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: false,
  },
  ubicacion: {
    type: Array,
    required: false,
  },
  fechahora: {
    type: String,
    required: false,
  },
  temp: {
    type: Number,
    required: false,
  },
  hum: {
    type: Number,
    required: false,
  },
  luz: {
    type: Number,
    required: false,
  },
});

/*objetoSchema.pre('remove', function(next) {
  Area.updateMany({'dispositivo': this._id}, {$unset: {dispositivo: ""}}).exec();
  next();
});*/

//                               Objeto
module.exports = mongoose.model("Dispositivo", objetoSchema);
