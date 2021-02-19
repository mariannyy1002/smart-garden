import React, { Component } from 'react'
import Encabezado from './Compartido/Encabezado';
import Tarjeta, {convertValue} from './Compartido/Tarjeta';
import Titulo from './Compartido/Titulo';
import AgregarDispositivo from './Modales/AgregarDispositivo';
import TarjetaDispositivo from './Modales/TarjetaDispositivo';
import axios from 'axios';
import LugarVacio from './Compartido/LugarVacio';

export default class Dispositivos extends Component {
    constructor(props){
        super(props);
        this.state = { listaDisp: [] };
    }
    componentDidMount(){
        axios.get("http://localhost:5000/dispositivos")
        .then(res => {
            this.setState({ listaDisp: res.data });
        });
    }
    render() {
        var contenido;
        if (this.state.listaDisp.length > 0){
            contenido = [
                <div className="container p-4">
                    <Encabezado titulo="satellite-dish" desc="info" temp="temperature-high" hum="tint" luz="sun"/>
                    {this.state.listaDisp.map(item => (
                        <Tarjeta titulo={item.titulo} desc={item.desc} temp={item.temp + " °C"} hum={item.hum + "%"} luz={convertValue(item.luz)}/>
                    ))}
                </div>
            ]
        } else contenido = [ <LugarVacio titulo="Dispositivos está vacío" contenido="un dispositivo"/> ]
        return (
            <>
                <Titulo titulo="Mis dispositivos" lugar="dispositivo"/>
                {contenido}
                <AgregarDispositivo/>
                <TarjetaDispositivo/>
            </>
        )
    }
}
