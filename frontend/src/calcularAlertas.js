import axios from 'axios';

export async function calcularAlertas() {
    var listaJardines = [];
    return axios.get("http://localhost:5000/jardines/")
    .then(resJ => {
        listaJardines = resJ.data;
        listaJardines.map(jardin => {
            var listaAreas = [];
            axios.get("http://localhost:5000/areas/" + jardin._id)
            .then( area => {
                listaAreas = area.data;
                listaAreas.map(disp => {
                    var temp, hum, luz, fechaHora, listaPlantas = [];
                        temp = disp.dispositivo.temp;
                        hum = disp.dispositivo.hum;
                        luz = disp.dispositivo.luz;
                        fechaHora = disp.dispositivo.fechahora;
                        axios.get("http://localhost:5000/plantaareas/" + disp._id)
                        .then(resP => {
                            var array = [], i = 0, total = 0;
                            listaPlantas = resP.data;
                            listaPlantas.map(item => { array[i++] = item.idhijo; });
                            array.map(item => { item.alertas = alertas(item, temp, hum, luz); total += item.alertas; });
                            const datos = { alertas: total };
                            axios.patch("http://localhost:5000/areas/" + disp._id, { datos });
                        });
                });
                var total = 0;
                listaAreas.map(item => { total += item.alertas });
                const datos = { alertas: total };
                axios.patch("http://localhost:5000/jardines/" + jardin._id, { datos });
            });
        });
        var total = 0;
        listaJardines.map(item => { total += item.alertas });
        return total;
        /*const datos = { alertas: total };
        axios.get("http://localhost:5000/alertas")
        .then(res => {
            if (res.data.length > 0) {
                let id = res.data[0]._id;
                axios.patch("http://localhost:5000/alertas/" + id, { datos });
            } else axios.post("http://localhost:5000/alertas", { datos });
        });*/
    });
}

calcularAlertas().then(total => {console.log(total)});

function alertas(item, temp, hum, luz) {
    var alertas = 0;
    if (temp < item.tempMin || temp > item.tempMax) alertas++;
    if (hum < item.humMin || hum > item.humMax) alertas++;
    if (luz < item.luz[0] || luz > item.luz[1]) alertas++;
    return alertas;
}