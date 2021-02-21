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
            areas: [],
            listaAreas: []
        };
    }
    mostrarJardin(){
        axios.get("http://localhost:5000/jardines/" + this.props.match.params.id)
        .then(res => {
            this.setState({
                titulo: res.data.titulo,
                desc: res.data.desc
            });
        });
    }
    mostrarAreas(){
        var total = 0;
        axios.get("http://localhost:5000/areas/" + this.props.match.params.id)
        .then(res => {
            console.log(res.data);
            this.setState({areas: res.data});
            this.state.areas.map(item => { total += item.alertas });
            this.setState({ alertas: total });
        });
    }
    componentDidMount() {
        this.mostrarJardin();
        this.mostrarAreas();
    }
    render() {
        var contenido;
        if (this.state.areas.length > 0){
            contenido = [
                <div className="container p-4">
                    <Encabezado titulo="map-marker-alt" desc="info" alertas="exclamation-triangle" temp="temperature-high" hum="tint" luz="sun"/>
                    {this.state.areas.map(item => (
                        <Link to={"/Area/" + this.props.match.params.id + "/" + item._id} className="link">
                            <Tarjeta titulo={item.titulo} desc={item.desc} alertas={item.alertas} temp={item.dispositivo.temp + " °C"} hum={item.dispositivo.hum + "%"} luz={convertValue(item.dispositivo.luz)}/>
                        </Link>
                    ))}
                </div>
            ]
        } else {
            contenido = [
                <div className="container p-4">
                    <LugarVacio titulo="Jardín está vacío" contenido="un área"/>
                </div>
            ]
        }
        return (
            <>
                <Titulo link="/Jardines" titulo={[<i className="me-2 fas fa-chevron-left"></i> , this.state.titulo]} desc={this.state.desc} lugar="área" alertas={this.state.alertas} ajustes={true}/>
                {contenido}
                <AgregarArea idpadre={this.props.match.params.id}/>
                <OpcionesJardin id={this.props.match.params.id}/>
            </>
        )
    }
}

export default withRouter(Jardin);
