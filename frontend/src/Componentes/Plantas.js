import React, { Component } from 'react';
import Encabezado from './Compartido/Encabezado';
import Tarjeta, {convertValue} from './Compartido/Tarjeta';
import Titulo from './Compartido/Titulo';
import AgregarPlanta from './Modales/AgregarPlanta';
import TarjetaPlanta from './Modales/TarjetaPlanta';
import axios from 'axios';

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
        return (
            <>
                <Titulo titulo="Mis plantas" lugar="planta"/>
                <div className="container p-4">
                    <Encabezado titulo="seedling" desc="info" temp="temperature-high" hum="tint" luz="sun"/>
                    {this.state.listaPlantas.map(item => (
                        <Tarjeta titulo={item.titulo} desc={item.desc} temp={item.tempMin + " °C  —  " + item.tempMax + " °C"} hum={item.humMin + "%  —  " + item.humMax + "%"} luz={ <>{convertValue(item.luz[0])} — {convertValue(item.luz[1])}</> }/>
                    ))}
                </div>
                <AgregarPlanta/>
                <TarjetaPlanta/>
            </>
        )
    }
}