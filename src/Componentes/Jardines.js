import React, { Component } from 'react';
import Tarjeta from './Compartido/Tarjeta';
import Titulo from './Compartido/Titulo';
import Link from 'react-router-dom/Link';

export default class Jardines extends Component {
    render() {
        return (
            <>
                <Titulo titulo="Mis jardínes" lugar="jardín" alertas=" ⚠ 1"/>
                <div className="container p-4">
                    <Link to="/Jardin"><Tarjeta titulo="Mi jardín 1" desc="Jardín superior" alertas="# 1"/></Link>
                    <Link to="/Jardin"><Tarjeta titulo="Mi jardín 2" desc="Jardín inferior" alertas="# 0"/></Link> 
                    <Link to="/Jardin"><Tarjeta titulo="Mi jardín 3" desc="Jardín principal" alertas="# 3"/></Link>
                </div>
            </>
        )
    }
}
