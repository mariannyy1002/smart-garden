import React, { Component } from 'react'
import axios from "axios";
import Modal from '../Compartido/Modal/Modal'
import CuerpoModal from '../Compartido/Modal/CuerpoModal'
import EncabezadoModal from '../Compartido/Modal/EncabezadoModal'
import PieModal from '../Compartido/Modal/PieModal'
import PieBotonesAgregar from '../Compartido/Modal/PieBotonesAgregar';
import MapaSelector from '../Compartido/MapaSelector';
import { rutaBase } from '../../RutaDB'

export default class AgregarDispositivo extends Component {
    constructor(props){
        super(props);
        this.state = {
            titulo: "",
            desc: "",
            ubicacion: [0,0],
        };
    }
    callbackFunction = (childData) => {
        this.setState({ubicacion: childData})
    };
    actualizaTitulo = (event) => {
        this.setState({
          titulo: event.target.value,
        });
    };
    actualizaDesc = (event) => {
        this.setState({
          desc: event.target.value,
        });
    };
    actualizaUbicacion = (event) => {
        this.setState({
          ubicacion: event.target.value,
        });
    };
    handleSubmit = (event) => {
        event.preventDefault();
        const datos = {
            titulo: this.state.titulo,
            desc: this.state.desc,
            ubicacion: this.state.ubicacion,
        };
        axios
          .post(rutaBase() + "/dispositivos", { datos })
          .then((res) => {
            console.log(res);
            console.log(res.data);
            window.location.replace("/Dispositivos");
          });
      };
    render() {
        return (
            <Modal tipo="agregar">
                <EncabezadoModal>Agregar dispositivo</EncabezadoModal>
                <CuerpoModal>
                    <form id="form-agregar" onSubmit={this.handleSubmit}>
                        <h6 className="mb-2">Nombre</h6>
                        <input className="form-control mb-3" type="text" name="titulo" value={this.state.titulo} onChange={this.actualizaTitulo}></input>
                        <h6 className="mb-2">Descripción</h6>
                        <input className="form-control mb-3" type="text" name="desc" value={this.state.desc} onChange={this.actualizaDesc}></input>
                    </form>
                    <h6 id="ubicacion" className="mb-2">Ubicación</h6>
                    <div className="container d-flex flex-fill p-0">
                        <MapaSelector parentCallback={this.callbackFunction}/>
                    </div> 
                </CuerpoModal>
                <PieModal>
                   <PieBotonesAgregar/>
                </PieModal>
            </Modal>
        )
    }
}
