import React, { Component } from 'react';
import Tarjeta from './Compartido/Tarjeta';
import Titulo from './Compartido/Titulo';
import Subtitulo from './Compartido/Subtitulo';
import Datos from './Datos';
import { withRouter } from 'react-router-dom';

const listaAreas = [
    { "idJ": 1, "idA": 1, "titulo": "Área 1", "desc": "Corral 1", "alertas": 1, "temp": 17, "hum": 50, "luz": "⚪" },
    { "idJ": 2, "idA": 1, "titulo": "Área 1", "desc": "Corral 2", "alertas": 0, "temp": 17, "hum": 50, "luz": "⚪" },
    { "idJ": 3, "idA": 1, "titulo": "Área 1", "desc": "Patio principal", "alertas": 2, "temp": -7, "hum": 5, "luz": "⚪" },
    { "idJ": 3, "idA": 2, "titulo": "Área 2", "desc": "Corral 3", "alertas": 1, "temp": 17, "hum": 50, "luz": "⚪" }
]
const listaPlantas = [
    { "idJ": 1, "idA": 1, "idP": 1, "titulo": "Rosa", "desc": "Planta 1", "tempMin": -7, "tempMax": 27,"humMin": 5, "humMax": 50, "luzMin": "⚫", "luzMax": "⚪" },
    { "idJ": 1, "idA": 1, "idP": 2, "titulo": "Lirio", "desc": "Planta 2", "tempMin": 10, "tempMax": 30,"humMin": 10, "humMax": 30, "luzMin": "⚫", "luzMax": "⚪" },
    { "idJ": 2, "idA": 1, "idP": 3, "titulo": "Margarita", "desc": "Planta 3", "tempMin": 20, "tempMax": 30,"humMin": 30, "humMax": 40, "luzMin": "⚫", "luzMax": "⚪" },
    { "idJ": 2, "idA": 1, "idP": 4, "titulo": "Alcatraz", "desc": "Planta 4", "tempMin": 30, "tempMax": 40,"humMin": 50, "humMax": 80, "luzMin": "⚫", "luzMax": "⚪" },
    { "idJ": 3, "idA": 1, "idP": 1, "titulo": "Rosa", "desc": "Planta 1", "tempMin": -7, "tempMax": 27,"humMin": 5, "humMax": 50, "luzMin": "⚫", "luzMax": "⚪" },
    { "idJ": 3, "idA": 1, "idP": 2, "titulo": "Lirio", "desc": "Planta 2", "tempMin": 10, "tempMax": 30,"humMin": 10, "humMax": 30, "luzMin": "⚫", "luzMax": "⚪" },
    { "idJ": 3, "idA": 2, "idP": 3, "titulo": "Margarita", "desc": "Planta 3", "tempMin": 20, "tempMax": 30,"humMin": 10, "humMax": 40, "luzMin": "⚫", "luzMax": "⚪" },
    { "idJ": 3, "idA": 2, "idP": 4, "titulo": "Alcatraz", "desc": "Planta 4", "tempMin": 30, "tempMax": 40,"humMin": 50, "humMax": 80, "luzMin": "⚫", "luzMax": "⚪" }
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
                <Titulo link={"/Jardin/" + this.props.match.params.idJ } titulo={"🠔 " + this.state.titulo} desc={this.state.desc}/>
                <Subtitulo subtitulo="Datos" p="1em"/>
                <Datos alertas={"⚠ " + this.state.alertas} temp={this.state.temp + " °C"} hum={this.state.hum + "%"} luz={this.state.luz}/>
                <div className="container-fluid">
                    <Subtitulo subtitulo="Plantas" lugar="planta"/>
                </div>
                <div className="container p-4">
                    {this.state.plantas.map(item => (
                        <Tarjeta titulo={item.titulo} desc={item.desc} temp={item.tempMin + " °C  —  " + item.tempMax + " °C"} hum={item.humMin + "%  —  " + item.humMax + "%"} luz={item.luzMin + "  —  " + item.luzMax}/>
                    ))}
                   {/*<Tarjeta titulo="Rosas" desc="Rosa silvestre" temp="-7 °C  —  27 °C" hum="5%  —  25%" luz="⚪  —  ⚫"/> 
                   <Tarjeta titulo="Rosas" desc="Rosa silvestre" temp="-7 °C  —  27 °C" hum="5%  —  25%" luz="⚪  —  ⚫"/> 
                    <Tarjeta titulo="Rosas" desc="Rosa silvestre" temp="-7 °C  —  27 °C" hum="5%  —  25%" luz="⚪  —  ⚫"/>*/}
                </div>
                <Subtitulo subtitulo="Ubicación de dispositivo"/>
                <div className="container p-4 text-center">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3420.6064083683277!2d-110.30141720229486!3d30.98146413067978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2smx!4v1612753693349!5m2!1sen!2smx" width="1000" height="600" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>
            </>
        )
    }
}
export default withRouter(Area);