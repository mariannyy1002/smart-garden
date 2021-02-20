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
import axios from 'axios';
import LugarVacio from './Compartido/LugarVacio';
import {calcularAlertas} from '../calcularAlertas.js';

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
            plantas: [],
            listaPlantas: []
        };
    }
    mostrarArea(){
        axios.get("http://localhost:5000/areas/" + this.props.match.params.idJ + "/" + this.props.match.params.idA)
        .then(res => {
            this.setState({ titulo: res.data.titulo, desc: res.data.desc });
            axios.get("http://localhost:5000/dispositivos/" + res.data.dispositivo)
            .then(res => {
                this.setState({ temp: res.data.temp, hum: res.data.hum, luz: res.data.luz, fechaHora: res.data.fechahora });
                this.mostrarPlantas();
            });
        });    
    }
    mostrarPlantas(){
        axios.get("http://localhost:5000/plantaareas/" + this.props.match.params.idA)
        .then(res => {
            var array = [], i = 0, total = 0;
            this.setState({ listaPlantas: res.data });
            this.state.listaPlantas.map(item => { array[i++] = item.idhijo; });
            this.setState({ plantas: array });
            console.log(this.state.plantas);
            this.state.plantas.map(item => {
                item.alertas = this.alertas(item);
                total += item.alertas;
            });
            this.setState({ alertas: total });
        });
    }
    componentDidMount() {
        calcularAlertas();
        this.mostrarArea();
        //this.mostrarPlantas();
    }
    alertas(item) {
        var alertas = 0;
        if (this.state.temp < item.tempMin || this.state.temp > item.tempMax) alertas++;
        if (this.state.hum < item.humMin || this.state.hum > item.humMax) alertas++;
        if (this.state.luz < item.luz[0] || this.state.luz > item.luz[1]) alertas++;
        return alertas;
    }
    render() {
        var contenido;
        if (this.state.plantas.length > 0){
            contenido = [
                <div className="container p-4">
                    <Encabezado titulo="seedling" desc="info" alertas="exclamation-triangle" temp="temperature-high" hum="tint" luz="sun"/>
                    {this.state.plantas.map(item => (
                        <Tarjeta titulo={item.titulo} desc={item.desc} alertas={item.alertas} temp={item.tempMin + " °C  —  " + item.tempMax + " °C"} hum={item.humMin + "%  —  " + item.humMax + "%"} luz={<>{convertValue(item.luz[0])} — {convertValue(item.luz[1])}</>}/>
                    ))}
                </div>
            ]
        } else {
            contenido = [
                <div className="container p-4">
                    <LugarVacio titulo="Área está vacía" contenido="una planta"/>
                </div>
            ]
        }
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
                {contenido}
                <Subtitulo subtitulo="Ubicación de dispositivo"/>
                <div className="container p-4 text-center">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3420.6064083683277!2d-110.30141720229486!3d30.98146413067978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2smx!4v1612753693349!5m2!1sen!2smx" width="1000" height="600" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>
                <AgregarPlantaArea idJ={this.props.match.params.idJ} idA={this.props.match.params.idA}/>
                <OpcionesArea titulo={this.state.titulo} desc={this.state.desc}/>
                <TarjetaPlantaArea/>
            </>
        )
    }
}
export default withRouter(Area);