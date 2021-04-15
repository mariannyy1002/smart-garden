//var direccion = '192.168.1.69';
//var direccion = '192.168.1.70';

var direccion = 'smart-garden-db.herokuapp.com';
var puerto = '';

export function rutaBase() {
    return "http://" + direccion + ":" + puerto;
}