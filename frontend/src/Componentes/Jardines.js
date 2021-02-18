import React, { Component } from 'react';
import Tarjeta from './Compartido/Tarjeta';
import Titulo from './Compartido/Titulo';
import Link from 'react-router-dom/Link';
import { withRouter } from 'react-router-dom';
import Encabezado from './Compartido/Encabezado';
import AgregarJardin from './Modales/AgregarJardin';
import axios from 'axios';

var total = 0, totalAlertas = "";
//listaJardines.map(item => total = total + item.alertas);
totalAlertas = total;

export class Jardines extends Component {
    constructor(props){
        super(props);
        this.state = { listaJardines: [] };
    }
    componentDidMount(){
        axios.get("http://localhost:5000/jardines")
        .then(res => {
            this.setState({listaJardines: res.data});
        });
    }
    render() {
        return (
            <>
                <Titulo titulo="Mis jardínes" lugar="jardín" alertas={totalAlertas}/>
                <div className="container p-4">
                    <Encabezado titulo="tree" desc="info" alertas="exclamation-triangle"/>
                    {this.state.listaJardines.map(item => (
                        <Link to={"/Jardin/" + item._id} className="link">
                            <Tarjeta titulo={item.titulo} desc={item.desc} /*alertas={item.alertas}*//>
                        </Link>
                    ))}
                </div>
                <AgregarJardin/>
            </>
        )
    }
}

export default withRouter(Jardines);