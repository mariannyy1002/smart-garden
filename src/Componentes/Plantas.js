import React, { Component } from 'react';
import Encabezado from './Compartido/Encabezado';
import Tarjeta, {convertValue} from './Compartido/Tarjeta';
import Titulo from './Compartido/Titulo';
import AgregarPlanta from './Modales/AgregarPlanta';

const listaPlantas = [
    { "idP": 1, "titulo": "Rosa", "desc": "Planta 1", "tempMin": -7, "tempMax": 27,"humMin": 5, "humMax": 50, "luzMin": 1, "luzMax": 5 },
    { "idP": 2, "titulo": "Lirio", "desc": "Planta 2", "tempMin": 10, "tempMax": 30,"humMin": 10, "humMax": 30, "luzMin": 2, "luzMax": 4 },
    { "idP": 3, "titulo": "Margarita", "desc": "Planta 3", "tempMin": 20, "tempMax": 30,"humMin": 30, "humMax": 40, "luzMin": 1, "luzMax": 3 },
    { "idP": 4, "titulo": "Alcatraz", "desc": "Planta 4", "tempMin": 30, "tempMax": 40,"humMin": 50, "humMax": 80, "luzMin": 2, "luzMax": 4 }
]

export default class Plantas extends Component {
    render() {
        return (
            <>
                <Titulo titulo="Mis plantas" lugar="planta"/>
                <div className="container p-4">
                    <Encabezado titulo="seedling" desc="info" temp="temperature-high" hum="tint" luz="sun"/>
                    {listaPlantas.map(item => (
                        <>
                        <Tarjeta titulo={item.titulo} desc={item.desc} temp={item.tempMin + " °C  —  " + item.tempMax + " °C"} hum={item.humMin + "%  —  " + item.humMax + "%"} luz={ <>{convertValue(item.luzMin)} — {convertValue(item.luzMax)}</> }/>
                        
                        </>
                    ))}
                   {/*<Tarjeta titulo="Rosas" desc="Rosa silvestre" temp="-7 °C  —  27 °C" hum="5%  —  25%" luz="⚪  —  ⚫"/> 
                   <Tarjeta titulo="Rosas" desc="Rosa silvestre" temp="-7 °C  —  27 °C" hum="5%  —  25%" luz="⚪  —  ⚫"/> 
                   <Tarjeta titulo="Rosas" desc="Rosa silvestre" temp="-7 °C  —  27 °C" hum="5%  —  25%" luz="⚪  —  ⚫"/>*/}
                </div>
                <AgregarPlanta/>
            </>
        )
    }
}