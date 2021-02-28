import React, { Component } from 'react';
import axios from 'axios';
import {convertValue} from './Compartido/Tarjeta';
import Datos from './Datos';
import Titulo from './Compartido/Titulo';
import { withRouter } from 'react-router-dom';
import Encabezado from './Compartido/Encabezado';
import HistorialVacio from './Compartido/HistorialVacio';
import { rutaBase } from '../RutaDB'

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
        axios.get(rutaBase() + "/areas/" + this.props.match.params.idJ + "/" + this.props.match.params.idA)
        .then(res => {
            this.setState({
                titulo: res.data.titulo,
                desc: res.data.desc
            });
        });
    }
    mostrarDatos(){
        axios.get(rutaBase() + "/historiales/" + this.props.match.params.idA)
        .then(res => {
            console.log(res.data)
            this.setState({datos: res.data});
        });
    }
    componentDidMount() {
        this.mostrarArea();
        this.mostrarDatos();
    }
    render() {
        var contenido;
        if (this.state.datos.length > 0){
            contenido = [
                    <div className="container p-4">
                        <Encabezado datos={true}/>
                        {this.state.datos.map(item => (
                            <Datos fechaHora={item.fechahora} temp={item.temp + " °C"} hum={item.hum + "%"} luz={convertValue(item.luz)}/>
                        ))}
                    </div>
                ]
        } else {
            contenido = [
                <div className="container p-4">
                    <HistorialVacio/>
                </div>
            ]
        }
        return (
            <>
            <Titulo link={"/Area/" + this.props.match.params.idJ + "/" + this.props.match.params.idA } titulo={[<i className="me-2 fas fa-chevron-left"></i> , "Historial "+this.state.titulo]} desc={this.state.desc}/>
                {contenido}
            </>
        )
    }
}

export default withRouter(Historial);
