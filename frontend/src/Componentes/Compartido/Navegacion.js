import React, { Component } from 'react'
import Link from "react-router-dom/Link";
import Clima from '../Clima';

export default class Navegacion extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark sticky-top" style={{backgroundColor: "#186429"}}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><i className="me-2 fas fa-seedling"></i>SmartGarden</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/Jardines"><i className="me-2 fas fa-tree"></i>Jardines</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Plantas"><i className="me-2 fas fa-seedling"></i>Plantas</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Dispositivos"><i className="me-2 fas fa-satellite-dish"></i>Dispositivos</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/">|<i className="mx-2 fas fa-cloud-sun"></i><Clima/></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
