const mongoose = require("mongoose");
const Area = require("./area");
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
  alertas: {
    type: Number,
    required: true,
    default: 0
  }
});

objetoSchema.pre('remove', function() {
    Area.find({'idpadre': this._id}, (err, data) => {
      data.map(item => { PlantaArea.remove({'idpadre': item._id}).exec(); });
    });
});

objetoSchema.post('remove', function() {
  Area.remove({'idpadre': this._id}).exec();
});

//                               Objeto
module.exports = mongoose.model("Jardine", objetoSchema);
