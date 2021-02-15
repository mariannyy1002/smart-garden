import React, { Component } from 'react';
import {convertValue} from './Compartido/Tarjeta';
import Datos from './Datos';
import Titulo from './Compartido/Titulo';
import { withRouter } from 'react-router-dom';
import Encabezado from './Compartido/Encabezado';

const listaAreas = [
    { "idJ": 1, "idA": 1, "titulo": "Área 1", "desc": "Corral 1", "alertas": 1, "fechaHora": "2021-02-14 19:13:52", "temp": 17, "hum": 50, "luz": 1 },
    { "idJ": 2, "idA": 1, "titulo": "Área 1", "desc": "Corral 2", "alertas": 0, "fechaHora": "2021-02-14 19:14:52", "temp": 17, "hum": 50, "luz": 2 },
    { "idJ": 3, "idA": 1, "titulo": "Área 1", "desc": "Patio principal", "alertas": 2, "fechaHora": "2021-02-14 19:15:52", "temp": -7, "hum": 5, "luz": 3 },
    { "idJ": 3, "idA": 2, "titulo": "Área 2", "desc": "Corral 3", "alertas": 1, "fechaHora": "2021-02-14 19:16:52", "temp": 17, "hum": 50, "luz": 4 }
]
const listaDatos = [
    { "idJ": 1, "idA": 1, "idD": 1, "fechaHora": "2020-11-07 19:57:54", "temp": 17, "hum": 50, "luz": 1 },
    { "idJ": 1, "idA": 1, "idD": 2, "fechaHora": "2020-11-07 19:58:54", "temp": 17, "hum": 50, "luz": 1 },
    { "idJ": 2, "idA": 1, "idD": 1, "fechaHora": "2020-11-07 19:59:54", "temp": 17, "hum": 50, "luz": 1 },
    { "idJ": 2, "idA": 1, "idD": 2, "fechaHora": "2020-11-07 20:00:54", "temp": 17, "hum": 50, "luz": 1 },
    { "idJ": 3, "idA": 1, "idD": 1, "fechaHora": "2020-11-07 20:01:54", "temp": 17, "hum": 50, "luz": 1 },
    { "idJ": 3, "idA": 1, "idD": 2, "fechaHora": "2020-11-07 20:02:54", "temp": 17, "hum": 50, "luz": 1 },
    { "idJ": 3, "idA": 2, "idD": 1, "fechaHora": "2020-11-07 20:03:54", "temp": 17, "hum": 50, "luz": 1 },
    { "idJ": 3, "idA": 2, "idD": 2, "fechaHora": "2020-11-07 20:04:54", "temp": 17, "hum": 50, "luz": 1 }
]

export class Historial extends Component {
    constructor(props){
        super(props);
        this.state = {
            titulo: "",
            desc: "",
            alertas: "",
            temp: "",
            hum: "",
            luz: "",
            datos: []
        };
    }
    mostrarArea(){
        listaAreas.forEach(item => {
            if (item.idJ == this.props.match.params.idJ && item.idA == this.props.match.params.idA){
                this.setState({
                    titulo: item.titulo,
                    desc: item.desc,
                    alertas: item.alertas,
                    temp: item.temp,
                    hum: item.hum,
                    luz: item.luz
                });
            }
        });
    }
    mostrarDatos(){
        let i = 0, array = [];
        listaDatos.forEach(item => {
            if (item.idJ == this.props.match.params.idJ && item.idA == this.props.match.params.idA){
                array[i++] = item;
            }
        });
        this.setState({datos: array})
    }
    componentDidMount() {
        this.mostrarArea();
        this.mostrarDatos();
    }
    render() {
        return (
            <>
                <Titulo link={"/Area/" + this.props.match.params.idJ + "/" + this.props.match.params.idA } titulo={"🠔 " + this.state.titulo} desc={this.state.desc}/>
                <div className="container p-4">
                    <Encabezado datos={true}/>
                    {this.state.datos.map(item => (
                        <Datos fechaHora={item.fechaHora} temp={item.temp + " °C"} hum={item.hum + "%"} luz={convertValue(item.luz)}/>
                    ))}
                </div>
            </>
        )
    }
}

export default withRouter(Historial);
