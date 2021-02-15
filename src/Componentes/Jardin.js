import React, { Component } from 'react';
import Tarjeta, {convertValue} from './Compartido/Tarjeta';
import Titulo from './Compartido/Titulo';
import Link from 'react-router-dom/Link';
import { withRouter } from 'react-router-dom';
import Encabezado from './Compartido/Encabezado';
import AgregarArea from './Modales/AgregarArea';
import OpcionesJardin from './Modales/OpcionesJardin';

const listaJardines = [
    { "id": 1, "titulo": "Mi jardín 1", "desc": "Jardín superior", "alertas": 1 },
    { "id": 2, "titulo": "Mi jardín 2", "desc": "Jardín inferior", "alertas": 0 },
    { "id": 3, "titulo": "Mi jardín 3", "desc": "Jardín principal", "alertas": 3 }
]
const listaAreas = [
    { "idJ": 1, "idA": 1, "titulo": "Área 1", "desc": "Corral 1", "alertas": 1, "temp": 17, "hum": 50, "luz": 1 },
    { "idJ": 2, "idA": 1, "titulo": "Área 1", "desc": "Corral 2", "alertas": 0, "temp": 17, "hum": 50, "luz": 2 },
    { "idJ": 3, "idA": 1, "titulo": "Área 1", "desc": "Patio principal", "alertas": 2, "temp": -7, "hum": 5, "luz": 3 },
    { "idJ": 3, "idA": 2, "titulo": "Área 2", "desc": "Corral 3", "alertas": 1, "temp": 17, "hum": 50, "luz": 4 }
]

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
        listaJardines.forEach(item => {
            if (item.id == this.props.match.params.id){
                this.setState({
                    titulo: item.titulo,
                    desc: item.desc,
                    alertas: item.alertas
                });
            }
        });
    }
    mostrarAreas(){
        let i = 0, array = [];
        listaAreas.forEach(item => {
            if (item.idJ == this.props.match.params.id){
                array[i++] = item;
            }
        });
        this.setState({areas: array})
    }
    componentDidMount() {
        this.mostrarJardin();
        this.mostrarAreas();
    }
    render() {
        var totalAlertas = "";
        totalAlertas = this.state.alertas;
        return (
            <>
                <Titulo link="/Jardines" titulo={[<i className="me-2 fas fa-chevron-left"></i> , this.state.titulo]} desc={this.state.desc} lugar="área" alertas={totalAlertas} ajustes={true}/>
                <div className="container p-4">
                    <Encabezado titulo="map-marker-alt" desc="info" alertas="exclamation-triangle" temp="temperature-high" hum="tint" luz="sun"/>
                    {this.state.areas.map(item => (
                        <Link to={"/Area/" + item.idJ + "/" + item.idA} className="link">
                            <Tarjeta titulo={item.titulo} desc={item.desc} alertas={ item.alertas} temp={item.temp + " °C"} hum={item.hum + "%"} luz={convertValue(item.luz)}/>
                        </Link>
                    ))}
                   {/*<Link to="/Area" className="link"><Tarjeta titulo="Área 1" desc="Patio principal" alertas="⚠ 2" temp="-7 °C" hum="5%" luz="⚪"/></Link> 
                   <Link to="/Area" className="link"><Tarjeta titulo="Área 2" desc="Corral" alertas="⚠ 1" temp="-7 °C" hum="5%" luz="⚪"/></Link>*/}
                </div>
                <AgregarArea/>
                <OpcionesJardin titulo={this.state.titulo} desc={this.state.desc}/>
            </>
        )
    }
}

export default withRouter(Jardin);
