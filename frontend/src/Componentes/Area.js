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
import { calcularAlertas } from '../calcularAlertas';
import MapaMostrar from './Compartido/MapaMostrar';
import { rutaBase } from '../RutaDB'

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
            listaPlantas: [],
            ubicacion: [],
        };
    }
    mostrarArea(){
        axios.get(rutaBase() + "/areas/" + this.props.match.params.idJ + "/" + this.props.match.params.idA)
        .then(res => {
            this.setState({
                titulo: res.data.titulo,
                desc: res.data.desc,
                temp: res.data.dispositivo.temp,
                hum: res.data.dispositivo.hum,
                luz: res.data.dispositivo.luz,
                fechaHora: res.data.dispositivo.fechahora,
                ubicacion: res.data.dispositivo.ubicacion
            });
            this.mostrarPlantas();
        });
    }
    mostrarPlantas(){
        axios.get(rutaBase() + "/plantaareas/" + this.props.match.params.idA)
        .then(res => {
            var total = 0;
            this.setState({ listaPlantas: res.data });
            this.state.listaPlantas.map(item => { total += item.alertas });
            this.setState({ alertas: total });
        });
    }
    componentDidMount() {
        setInterval(() => calcularAlertas(), 1000);
        this.mostrarArea();
    }
    componentDidUpdate(prevProps, prevState){
        if (prevState.listaPlantas !== this.state.listaPlantas) {
            calcularAlertas();
            axios.get(rutaBase() + "/plantaareas/" + this.props.match.params.idA)
            .then(res => {
                var total = 0;
                this.setState({ listaPlantas: res.data });
                this.state.listaPlantas.map(item => { total += item.alertas });
                this.setState({ alertas: total });
            });
        }
    }
    render() {
        var contenido;
        if (this.state.listaPlantas.length > 0){
            contenido = [
                <div className="container p-4">
                    <Encabezado titulo="seedling" desc="info" alertas="exclamation-triangle" temp="temperature-high" hum="tint" luz="sun"/>
                    {this.state.listaPlantas.map(item => (
                        <Tarjeta titulo={item.idhijo.titulo} desc={item.idhijo.desc} alertas={item.alertas} temp={item.idhijo.tempMin + " °C  —  " + item.idhijo.tempMax + " °C"} hum={item.idhijo.humMin + "%  —  " + item.idhijo.humMax + "%"} luz={<>{convertValue(item.idhijo.luz[0])} — {convertValue(item.idhijo.luz[1])}</>} id={item._id}/>
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
                <div className="container p-4 ">
                    <MapaMostrar ubicacion={this.state.ubicacion}/>
                </div>
                <AgregarPlantaArea idJ={this.props.match.params.idJ} idA={this.props.match.params.idA}/>
                <OpcionesArea idA={this.props.match.params.idA} idJ={this.props.match.params.idJ}/>
                <TarjetaPlantaArea idA={this.props.match.params.idA} idJ={this.props.match.params.idJ}/>
            </>
        )
    }
}
export default withRouter(Area);