import React, { Component } from 'react';
import Tarjeta from './Compartido/Tarjeta';
import Titulo from './Compartido/Titulo';
import Link from 'react-router-dom/Link';

export default class Jardines extends Component {
    render() {
        return (
            <>
                <Titulo link="/Jardines" titulo="🠔 Jardín 1" desc="Jardín superior" lugar="área" alertas="⚠ 3"/>
                <div className="container p-4">
                   <Link to="/Area" className="link"><Tarjeta titulo="Área 1" desc="Patio principal" alertas="⚠ 2" temp="-7 °C" hum="5%" luz="⚪"/></Link> 
                   <Link to="/Area" className="link"><Tarjeta titulo="Área 2" desc="Corral" alertas="⚠ 1" temp="-7 °C" hum="5%" luz="⚪"/></Link>
                </div>
            </>
        )
    }
}
