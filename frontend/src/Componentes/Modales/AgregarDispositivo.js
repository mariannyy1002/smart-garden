import React, { Component } from 'react'
import axios from "axios";
import Modal from '../Compartido/Modal/Modal'
import CuerpoModal from '../Compartido/Modal/CuerpoModal'
import EncabezadoModal from '../Compartido/Modal/EncabezadoModal'
import PieModal from '../Compartido/Modal/PieModal'
import PieBotonesAgregar from '../Compartido/Modal/PieBotonesAgregar';

export default class AgregarDispositivo extends Component {
    constructor(props){
        super(props);
        this.state = {
            titulo: "",
            desc: "",
            ubicacion: [0,0],
        };
    }
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
          .post("http://localhost:5000/dispositivos", { datos })
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
                    <h6 className="mb-2">Ubicación</h6>
                    <div className="container d-flex flex-fill p-0">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3420.6064083683277!2d-110.30141720229486!3d30.98146413067978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2smx!4v1612753693349!5m2!1sen!2smx" className="col p-0 m-0" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </div> 
                </CuerpoModal>
                <PieModal>
                   <PieBotonesAgregar/>
                </PieModal>
            </Modal>
        )
    }
}
