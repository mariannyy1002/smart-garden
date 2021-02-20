const Plantas = require("./Models/plantaarea");
const Areas = require("./Models/area");
const Jardines = require("./Models/jardin");

var temp, hum, luz;

Jardines.find({}, (err, data) => {
    var total2 = 0;
    if (err) return console.log(err);
    data.map(jardin => {
        Areas.find({'idpadre': jardin._id}, (err, data) => {
            var total1 = 0;
            data.map(area => {
                temp = area.dispositivo.temp;
                hum = area.dispositivo.hum;
                luz = area.dispositivo.luz;
                Plantas.find({'idpadre': area._id}, (err, data) => {
                    data.map(item => {
                        item.alertas = alertas(item.idhijo, temp, hum, luz);
                        //Plantas.findByIdAndUpdate({'_id': item._id}, {alertas: item.alertas});
                        //Plantas.findOne({'_id': item._id}, (err, data) => {console.log(data)})
                        total1 += item.alertas;
                    });
                }).populate('idhijo');
            });
            Areas.findOneAndUpdate({'idpadre': jardin._id}, { alertas: total1 });
            data.map(item => { total2 += item.alertas });
        }).populate('dispositivo');
    });
    Jardines.findByIdAndUpdate({ alertas: total2 });
    //data.map(item => { totalAlertas += item.alertas });
});

function alertas(item, temp, hum, luz) {
    var alertas = 0;
    if (temp < item.tempMin || temp > item.tempMax) alertas++;
    if (hum < item.humMin || hum > item.humMax) alertas++;
    if (luz < item.luz[0] || luz > item.luz[1]) alertas++;
    return alertas;
}