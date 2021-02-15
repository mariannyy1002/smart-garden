import React, { Component } from 'react';
import Link from 'react-router-dom/Link';

export default class Titulo extends Component {
    render() {
        if (this.props.link) {
            var titulo = <Link to={this.props.link} className="link"><h1 className="p-2 bd-highlight mb-0" style={{color:"black"}}>{this.props.titulo}</h1></Link>
        } else titulo = <h1 className="p-2 bd-highlight mb-0">{this.props.titulo}</h1>;
        if (this.props.lugar) {
            var boton = <h1 className="p-2 pr-3 mr-0 mt-2 bd-highlight btn btn-success text-center font-weight-bold" data-bs-toggle="modal" data-bs-target="#modal-agregar">+ Agregar {this.props.lugar}</h1>
        } else boton = <div className="" style={{height: "58px"}}></div>;
        if (this.props.ajustes) {
            //Ajustes                                                                            !!!!!!!
            var ajustes = <h1 className="py-2 px-3 ml-2 mr-0 mt-2 bd-highlight btn btn-success text-center font-weight-bold" data-bs-toggle="modal" data-bs-target="#modal-opciones"><i class="fas fa-cog"></i></h1>;
        } else ajustes = <div style={{height: "58px"}}></div>;
        if (this.props.alertas > 0) {
            var alertas = <><i class="fas fa-exclamation-triangle"></i> {this.props.alertas}</>;
        }
        return (
            <div className="d-flex flex-container p-2 px-xl-5 px-lg-4 px-md-3 align-items-center" style={{backgroundColor: "#bfe5c7"}}>
                {titulo}
                <h4 className="px-2 mt-1 bd-highlight font-weight-light mb-0">{this.props.desc}</h4>
                <h1 className="p-2 flex-grow-1 bd-highlight ml-5 mb-0">{alertas}</h1>
                {boton}
                {ajustes}
                           
            </div>
        )
    }
}
