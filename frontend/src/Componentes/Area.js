import React, { Component } from 'react';
import Tarjeta, {convertValue} from './Compartido/Tarjeta';
import Titulo from './Compartido/Titulo';
import Subtitulo from './Compartido/Subtitulo';
import Datos from './Datos';
import Encabezado from './Compartido/Encabezado';
import { withRouter } from 'react-router-dom';
import AgregarPlantaArea from './Modales/AgregarPlantaArea';
import OpcionesArea from './Modales/OpcionesArea';
import TarjetaPlantaArea from './Modales/TarjetaPlantaArea';

const listaAreas = [
    { "idJ": 1, "idA": 1, "titulo": "Área 1", "desc": "Corral 1", "alertas": 1, "fechaHora": "2021-02-14 19:13:52", "temp": 17, "hum": 50, "luz": 1 },
    { "idJ": 2, "idA": 1, "titulo": "Área 1", "desc": "Corral 2", "alertas": 0, "fechaHora": "2021-02-14 19:14:52", "temp": 17, "hum": 50, "luz": 2 },
    { "idJ": 3, "idA": 1, "titulo": "Área 1", "desc": "Patio principal", "alertas": 2, "fechaHora": "2021-02-14 19:15:52", "temp": -7, "hum": 5, "luz": 3 },
    { "idJ": 3, "idA": 2, "titulo": "Área 2", "desc": "Corral 3", "alertas": 1, "fechaHora": "2021-02-14 19:16:52", "temp": 17, "hum": 50, "luz": 4 }
]
const listaPlantas = [
    { "idJ": 1, "idA": 1, "idP": 1, "titulo": "Rosa", "desc": "Planta 1", "tempMin": -7, "tempMax": 27,"humMin": 5, "humMax": 50, "luzMin": 1, "luzMax": 2, "alertas": 0 },
    { "idJ": 1, "idA": 1, "idP": 2, "titulo": "Lirio", "desc": "Planta 2", "tempMin": 10, "tempMax": 30,"humMin": 10, "humMax": 30, "luzMin": 2, "luzMax": 3, "alertas": 1 },
    { "idJ": 2, "idA": 1, "idP": 3, "titulo": "Margarita", "desc": "Planta 3", "tempMin": 20, "tempMax": 30,"humMin": 30, "humMax": 40, "luzMin": 1, "luzMax": 3, "alertas": 0 },
    { "idJ": 2, "idA": 1, "idP": 4, "titulo": "Alcatraz", "desc": "Planta 4", "tempMin": 30, "tempMax": 40,"humMin": 50, "humMax": 80, "luzMin": 2, "luzMax": 4, "alertas": 0 },
    { "idJ": 3, "idA": 1, "idP": 1, "titulo": "Rosa", "desc": "Planta 1", "tempMin": -7, "tempMax": 27,"humMin": 5, "humMax": 50, "luzMin": 3, "luzMax": 5, "alertas": 1 },
    { "idJ": 3, "idA": 1, "idP": 2, "titulo": "Lirio", "desc": "Planta 2", "tempMin": 10, "tempMax": 30,"humMin": 10, "humMax": 30, "luzMin": 1, "luzMax": 5, "alertas": 1 },
    { "idJ": 3, "idA": 2, "idP": 3, "titulo": "Margarita", "desc": "Planta 3", "tempMin": 20, "tempMax": 30,"humMin": 10, "humMax": 40, "luzMin": 2, "luzMax": 3, "alertas": 1 },
    { "idJ": 3, "idA": 2, "idP": 4, "titulo": "Alcatraz", "desc": "Planta 4", "tempMin": 30, "tempMax": 40,"humMin": 50, "humMax": 80, "luzMin": 3, "luzMax": 5, "alertas": 0 }
]

export class Area extends Component {
    constructor(props){
        super(props);
        this.state = {
            titulo: "",
            desc: "",
            alertas: "",
            temp: "",
            hum: "",
            luz: "",
            fechaHora: "",
            plantas: []
        };
    }
    mostrarArea(){
        listaAreas.forEach(item => {
            if (item.idJ == this.props.match.params.idJ && item.idA == this.props.match.params.idA){
                this.setState({
                    titulo: item.titulo,
                    desc: item.desc,
                    alertas: item.alertas,
                    fechaHora: item.fechaHora,
                    temp: item.temp,
                    hum: item.hum,
                    luz: item.luz
                });
            }
        });
    }
    mostrarPlantas(){
        let i = 0, array = [];
        listaPlantas.forEach(item => {
            if (item.idJ == this.props.match.params.idJ && item.idA == this.props.match.params.idA){
                array[i++] = item;
            }
        });
        this.setState({plantas: array})
    }
    componentDidMount() {
        this.mostrarArea();
        this.mostrarPlantas();
    }
    render() {
        return (
            <>
                <Titulo link={"/Jardin/" + this.props.match.params.idJ } titulo={[<i className="me-2 fas fa-chevron-left"></i> , this.state.titulo]} desc={this.state.desc} alertas={this.state.alertas} ajustes={true}/>
                <Subtitulo subtitulo="Datos" p="1.5em" link={"/Historial/"+ this.props.match.params.idJ + "/" + this.props.match.params.idA}/>
                <div className="container p-4">
                    <Encabezado datos={true}/>
                    <Datos fechaHora={this.state.fechaHora} temp={this.state.temp + " °C"} hum={this.state.hum + "%"} luz={convertValue(this.state.luz)}/>
                </div>
                <div className="container-fluid">
                    <Subtitulo subtitulo="Plantas" lugar="planta"/>
                </div>
                <div className="container p-4">
                    <Encabezado titulo="seedling" desc="info" alertas="exclamation-triangle" temp="temperature-high" hum="tint" luz="sun"/>
                    {this.state.plantas.map(item => (
                        <Tarjeta titulo={item.titulo} desc={item.desc} alertas={item.alertas} temp={item.tempMin + " °C  —  " + item.tempMax + " °C"} hum={item.humMin + "%  —  " + item.humMax + "%"} luz={<>{convertValue(item.luzMin)} — {convertValue(item.luzMax)}</>}/>
                    ))}
                </div>
                <Subtitulo subtitulo="Ubicación de dispositivo"/>
                <div className="container p-4 text-center">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3420.6064083683277!2d-110.30141720229486!3d30.98146413067978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2smx!4v1612753693349!5m2!1sen!2smx" width="1000" height="600" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>
                <AgregarPlantaArea/>
                <OpcionesArea titulo={this.state.titulo} desc={this.state.desc}/>
                <TarjetaPlantaArea/>
            </>
        )
    }
}
export default withRouter(Area);