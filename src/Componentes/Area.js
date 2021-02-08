import React, { Component } from 'react';
import Tarjeta from './Compartido/Tarjeta';
import Titulo from './Compartido/Titulo';
import Subtitulo from './Compartido/Subtitulo';
import Datos from './Datos';

export default class Plantas extends Component {
    render() {
        return (
            <>
                <Titulo link="/Jardin" titulo="🠔 Área 1" desc="Patio principal"/>
                <Subtitulo subtitulo="Datos" p="1em"/>
                <Datos alertas="⚠ 2" temp="-7 °C" hum="5%" luz="⚪"/>
                <div className="container-fluid">
                    <Subtitulo subtitulo="Plantas" lugar="planta"/>
                </div>
                <div className="container p-4">
                   <Tarjeta titulo="Rosas" desc="Rosa silvestre" temp="-7 °C  —  27 °C" hum="5%  —  25%" luz="⚪  —  ⚫"/> 
                   <Tarjeta titulo="Rosas" desc="Rosa silvestre" temp="-7 °C  —  27 °C" hum="5%  —  25%" luz="⚪  —  ⚫"/> 
                   <Tarjeta titulo="Rosas" desc="Rosa silvestre" temp="-7 °C  —  27 °C" hum="5%  —  25%" luz="⚪  —  ⚫"/> 
                </div>
                <Subtitulo subtitulo="Ubicación de dispositivo"/>
                <div className="container p-4 text-center">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3420.6064083683277!2d-110.30141720229486!3d30.98146413067978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2smx!4v1612753693349!5m2!1sen!2smx" width="1000" height="600" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>
            </>
        )
    }
}