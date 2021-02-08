import React, { Component } from 'react';
import Tarjeta from './Compartido/Tarjeta';
import Titulo from './Compartido/Titulo';

export default class Plantas extends Component {
    render() {
        return (
            <>
                <Titulo titulo="Mis plantas" lugar="planta"/>
                <div className="container p-4">
                   <Tarjeta titulo="Rosas" desc="Rosa silvestre" temp="-7 °C  —  27 °C" hum="5%  —  25%" luz="⚪  —  ⚫"/> 
                   <Tarjeta titulo="Rosas" desc="Rosa silvestre" temp="-7 °C  —  27 °C" hum="5%  —  25%" luz="⚪  —  ⚫"/> 
                   <Tarjeta titulo="Rosas" desc="Rosa silvestre" temp="-7 °C  —  27 °C" hum="5%  —  25%" luz="⚪  —  ⚫"/> 
                </div>
            </>
        )
    }
}