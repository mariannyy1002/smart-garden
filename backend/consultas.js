const Plantas = require("./Models/plantaarea");
const Areas = require("./Models/area");
const Jardines = require("./Models/jardin");

var total2 = 0, temp = 0, hum = 0, luz = 0;

Jardines.find({}, (err, data) => {
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
                        total1 += item.alertas;
                    });
                }).populate('idhijo');
                total2 += area.alertas
            });
            Areas.findOneAndUpdate({'idpadre': jardin._id}, { alertas: total1 });
        }).populate('dispositivo');
    });
    //No se actualizan los jardines
    Jardines.findByIdAndUpdate({ alertas: total2 });
    //Jardines.find({}, (err, data) => {console.log(data)});
});

function alertas(item, temp, hum, luz) {
    var alertas = 0;
    if (temp < item.tempMin || temp > item.tempMax) alertas++;
    if (hum < item.humMin || hum > item.humMax) alertas++;
    if (luz < item.luz[0] || luz > item.luz[1]) alertas++;
    return alertas;
}