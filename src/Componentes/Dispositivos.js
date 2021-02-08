import React, { Component } from 'react'
import Tarjeta from './Compartido/Tarjeta';
import Titulo from './Compartido/Titulo';

export default class Dispositivos extends Component {
    render() {
        return (
            <>
                <Titulo titulo="Mis dispositivos" lugar="dispositivo"/>
                <div className="container p-4">
                   <Tarjeta titulo="Mi dispositivo 1" desc="Jardín superior" temp="-30 °C" hum="25%" luz="⚪"/> 
                   <Tarjeta titulo="Mi dispositivo 2" desc="Jardín inferior" temp="-7 °C" hum="5%" luz="⚪"/> 
                   <Tarjeta titulo="Mi dispositivo 3" desc="Jardín principal" temp="-7 °C" hum="5%" luz="⚪"/> 
                </div>
            </>
        )
    }
}
