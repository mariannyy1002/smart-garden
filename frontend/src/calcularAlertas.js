import axios from 'axios';
import { rutaBase } from './RutaDB'

export function calcularAlertas() {
    var listaJardines = [];
    axios.get(rutaBase() + "/jardines/")
    .then(resJ => {
        listaJardines = resJ.data;
        listaJardines.map(jardin => {
            var listaAreas = [];
            axios.get(rutaBase() + "/areas/" + jardin._id)
            .then( area => {
                listaAreas = area.data;
                listaAreas.map(disp => {
                    var temp, hum, luz, fechaHora, listaPlantas = [];
                        temp = disp.dispositivo.temp;
                        hum = disp.dispositivo.hum;
                        luz = disp.dispositivo.luz;
                        fechaHora = disp.dispositivo.fechahora;
                        axios.get(rutaBase() + "/plantaareas/" + disp._id)
                        .then(resP => {
                            var total = 0;
                            listaPlantas = resP.data;
                            listaPlantas.map(item => {
                                item.alertas = alertas(item.idhijo, temp, hum, luz);
                                const datos = { alertas: item.alertas };
                                axios.patch(rutaBase() + "/plantaareas/" + item._id, {datos});
                                total += item.alertas;
                            });
                            const datos = { alertas: total };
                            axios.patch(rutaBase() + "/areas/" + disp._id, { datos });
                        });
                });
                var total = 0;
                listaAreas.map(item => { total += item.alertas });
                const datos = { alertas: total };
                axios.patch(rutaBase() + "/jardines/" + jardin._id, { datos });
            });
        });
    });
}

function alertas(item, temp, hum, luz) {
    var alertas = 0;
    if (temp < item.tempMin || temp > item.tempMax) alertas++;
    if (hum < item.humMin || hum > item.humMax) alertas++;
    if (luz < item.luz[0] || luz > item.luz[1]) alertas++;
    return alertas;
}