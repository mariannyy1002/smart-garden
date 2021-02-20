import React, { Component } from 'react';
import Tarjeta from './Compartido/Tarjeta';
import Titulo from './Compartido/Titulo';
import Link from 'react-router-dom/Link';
import { withRouter } from 'react-router-dom';
import Encabezado from './Compartido/Encabezado';
import AgregarJardin from './Modales/AgregarJardin';
import axios from 'axios';
import LugarVacio from './Compartido/LugarVacio';
import {calcularAlertas} from '../calcularAlertas.js';

export class Jardines extends Component {
    constructor(props){
        super(props);
        this.state = { listaJardines: [], alertas: "" };
    }
    componentDidMount(){
        calcularAlertas();
        axios.get("http://localhost:5000/alertas")
        .then(res => {
            if (res.data.length > 0) this.setState({alertas: res.data[0].alertas});
            else this.setState({alertas: res.data[0].alertas});
        });
        axios.get("http://localhost:5000/jardines")
        .then(res => {
            this.setState({listaJardines: res.data});
        });
    }
    render() {
        var contenido;
        if (this.state.listaJardines.length > 0){
            contenido = [
                <div className="container p-4">
                    <Encabezado titulo="tree" desc="info" alertas="exclamation-triangle"/>
                    {this.state.listaJardines.map(item => (
                        <Link to={"/Jardin/" + item._id} className="link">
                            <Tarjeta titulo={item.titulo} desc={item.desc} alertas={item.alertas}/>
                        </Link>
                    ))}
                </div>
                ]
        } else {
            contenido = [
                <div className="container p-4">
                    <LugarVacio titulo="Jardines está vacío" contenido="un jardín"/>
                </div>
            ]
        }
        return (
            <>
                <Titulo titulo="Mis jardínes" lugar="jardín" alertas={this.state.alertas}/>
                {contenido}
                <AgregarJardin/>
            </>
        )
    }
}

export default withRouter(Jardines);