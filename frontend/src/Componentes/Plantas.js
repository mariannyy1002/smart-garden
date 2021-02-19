import React, { Component } from 'react';
import Encabezado from './Compartido/Encabezado';
import Tarjeta, {convertValue} from './Compartido/Tarjeta';
import Titulo from './Compartido/Titulo';
import AgregarPlanta from './Modales/AgregarPlanta';
import TarjetaPlanta from './Modales/TarjetaPlanta';
import axios from 'axios';
import LugarVacio from './Compartido/LugarVacio';

export default class Plantas extends Component {
    constructor(props){
        super(props);
        this.state = { listaPlantas: [] };
    }
    componentDidMount(){
        axios.get("http://localhost:5000/plantas")
        .then(res => {
            this.setState({listaPlantas: res.data});
        });
    }
    render() {
        var contenido;
        if (this.state.listaPlantas.length > 0)
        {
            contenido = 
                [
                    <div className="container p-4">
                    <Encabezado titulo="seedling" desc="info" temp="temperature-high" hum="tint" luz="sun"/>
                    {this.state.listaPlantas.map(item => (
                        <Tarjeta titulo={item.titulo} desc={item.desc} temp={item.tempMin + " °C  —  " + item.tempMax + " °C"} hum={item.humMin + "%  —  " + item.humMax + "%"} luz={ <>{convertValue(item.luz[0])} — {convertValue(item.luz[1])}</> }/>
                    ))}
                    </div>
                ]
        }
        else{
            contenido = [
                <div className="container p-4">
                    <LugarVacio titulo="Plantas está vacío" contenido="una planta"/>
                </div>
            ]
        }
        return (
            <>
                <Titulo titulo="Mis plantas" lugar="planta"/>
                {contenido}
                <AgregarPlanta/>
                <TarjetaPlanta/>
            </>
        )
    }
}