import React, { Component } from 'react';
import Tarjeta from './Compartido/Tarjeta';
import Titulo from './Compartido/Titulo';
import Link from 'react-router-dom/Link';
import { withRouter } from 'react-router-dom';
import Encabezado from './Compartido/Encabezado';
import AgregarJardin from './Modales/AgregarJardin';

const listaJardines = [
    { "id": 1, "titulo": "Mi jardín 1", "desc": "Jardín superior", "alertas": 1 },
    { "id": 2, "titulo": "Mi jardín 2", "desc": "Jardín inferior", "alertas": 0 },
    { "id": 3, "titulo": "Mi jardín 3", "desc": "Jardín principal", "alertas": 3 }
]
var total = 0;
listaJardines.map(item => total = total + item.alertas);

export class Jardines extends Component {
    render() {
        return (
            <>
                <Titulo titulo="Mis jardínes" lugar="jardín" alertas={"⚠ " + total}/>
                <div className="container p-4">
                    <Encabezado titulo="tree" desc="info" alertas="exclamation-triangle"/>
                    {listaJardines.map(item => (
                        <Link to={"/Jardin/" + item.id} className="link">
                            <Tarjeta titulo={item.titulo} desc={item.desc} alertas={item.alertas}/>
                        </Link>
                    ))}
                    {/*<Link to="/Jardin" className="link"><Tarjeta titulo="Mi jardín 1" desc="Jardín superior" alertas="⚠ 1"/></Link>
                    <Link to="/Jardin" className="link"><Tarjeta titulo="Mi jardín 2" desc="Jardín inferior" alertas="⚠ 0"/></Link> 
                    <Link to="/Jardin" className="link"><Tarjeta titulo="Mi jardín 3" desc="Jardín principal" alertas="⚠ 3"/></Link>*/}
                </div>
                <AgregarJardin/>
            </>
        )
    }
}

export default withRouter(Jardines);