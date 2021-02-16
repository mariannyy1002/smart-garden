import React, { Component } from 'react'
import Encabezado from './Compartido/Encabezado';
import Tarjeta, {convertValue} from './Compartido/Tarjeta';
import Titulo from './Compartido/Titulo';
import AgregarDispositivo from './Modales/AgregarDispositivo';
import TarjetaDispositivo from './Modales/TarjetaDispositivo';

const listaDisp = [
    { "idD": 1, "titulo": "Mi dispositivo 1", "desc": "Jardín superior", "temp": -30,"hum": 25, "luz": 1 },
    { "idD": 2, "titulo": "Mi dispositivo 2", "desc": "Jardín inferior", "temp": -7,"hum": 5, "luz": 2 },
    { "idD": 3, "titulo": "Mi dispositivo 3", "desc": "Jardín principal", "temp": 30,"hum": 50, "luz": 3 }
]

export default class Dispositivos extends Component {
    render() {
        return (
            <>
                <Titulo titulo="Mis dispositivos" lugar="dispositivo"/>
                <div className="container p-4">
                    <Encabezado titulo="satellite-dish" desc="info" temp="temperature-high" hum="tint" luz="sun"/>
                    {listaDisp.map(item => (
                        <Tarjeta titulo={item.titulo} desc={item.desc} temp={item.temp + " °C"} hum={item.hum + "%"} luz={convertValue(item.luz)}/> 
                    ))}
                   {/*<Tarjeta titulo="Mi dispositivo 1" desc="Jardín superior" temp="-30 °C" hum="25%" luz="⚪"/> 
                   <Tarjeta titulo="Mi dispositivo 2" desc="Jardín inferior" temp="-7 °C" hum="5%" luz="⚪"/> 
                    <Tarjeta titulo="Mi dispositivo 3" desc="Jardín principal" temp="-7 °C" hum="5%" luz="⚪"/>*/}
                </div>
                <AgregarDispositivo/>
                <TarjetaDispositivo/>
            </>
        )
    }
}
