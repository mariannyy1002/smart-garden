import React, { Component } from 'react';
import Tarjeta, {convertValue} from './Compartido/Tarjeta';
import Titulo from './Compartido/Titulo';
import Link from 'react-router-dom/Link';
import { withRouter } from 'react-router-dom';
import Encabezado from './Compartido/Encabezado';
import AgregarArea from './Modales/AgregarArea';
import OpcionesJardin from './Modales/OpcionesJardin';
import axios from 'axios';
import LugarVacio from './Compartido/LugarVacio';

export class Jardin extends Component {
    constructor(props){
        super(props);
        this.state = {
            titulo: "",
            desc: "",
            alertas: "",
            areas: []
        };
    }
    mostrarJardin(){
        axios.get("http://localhost:5000/jardines/" + this.props.match.params.id)
        .then(res => {
            this.setState({
                titulo: res.data.titulo,
                desc: res.data.desc,
                /*alertas: item.alertas*/
            });
        });
    }
    mostrarAreas(){
        axios.get("http://localhost:5000/areas/" + this.props.match.params.id)
        .then(res => {
            this.setState({areas: res.data});
        });
    }
    componentDidMount() {
        this.mostrarJardin();
        this.mostrarAreas();
    }
    render() {
        var totalAlertas = "";
        //totalAlertas = this.state.alertas;
        var contenido;
        if (this.state.areas.length > 0)
        {
            contenido = 
                [
                    <div className="container p-4">
                        <Encabezado titulo="map-marker-alt" desc="info" alertas="exclamation-triangle" temp="temperature-high" hum="tint" luz="sun"/>
                        {this.state.areas.map(item => (
                            <Link to={"/Area/" + this.props.match.params.id + "/" + item._id} className="link">
                                <Tarjeta titulo={item.titulo} desc={item.desc} /*alertas={item.alertas} temp={item.temp + " °C"} hum={item.hum + "%"} luz={convertValue(item.luz)}*//>
                            </Link>
                        ))}
                    </div>
                ]
        }
        else{
            contenido = [
                <LugarVacio titulo="Jardín" contenido="un área"/>
            ]
        }
        return (
            <>
                <Titulo link="/Jardines" titulo={[<i className="me-2 fas fa-chevron-left"></i> , this.state.titulo]} desc={this.state.desc} lugar="área" alertas={totalAlertas} ajustes={true}/>
                {contenido}
                <AgregarArea idpadre={this.props.match.params.id}/>
                <OpcionesJardin titulo={this.state.titulo} desc={this.state.desc}/>
            </>
        )
    }
}

export default withRouter(Jardin);
