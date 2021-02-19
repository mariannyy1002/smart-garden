import React, { Component } from 'react'
import axios from "axios";
import Modal from '../Compartido/Modal/Modal'
import CuerpoModal from '../Compartido/Modal/CuerpoModal'
import EncabezadoModal from '../Compartido/Modal/EncabezadoModal'
import PieModal from '../Compartido/Modal/PieModal'
import PieBotonesAgregar from '../Compartido/Modal/PieBotonesAgregar';

export default class AgregarJardin extends Component {
    constructor(props){
        super(props);
        this.state = {
            titulo: "",
            desc: "",
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
    handleSubmit = (event) => {
        event.preventDefault();
        const datos = {
            titulo: this.state.titulo,
            desc: this.state.desc,
        };
        axios
          .post("http://localhost:5000/agregarjardin", { datos })
          .then((res) => {
            console.log(res);
            console.log(res.data);
            window.location.replace("/Jardines");
          });
      };
    render() {
        return (
            <Modal tipo="agregar">
                <EncabezadoModal>Agregar jardín</EncabezadoModal>
                <CuerpoModal>
                    <form id="form-agregar" onSubmit={this.handleSubmit}>
                        <h6 className="mb-2">Nombre</h6>
                        <input className="form-control mb-3" type="text" name="titulo" value={this.state.titulo} onChange={this.actualizaTitulo}></input>
                        <h6 className="mb-2">Descripción</h6>
                        <input className="form-control mb-3" type="text" name="desc" value={this.state.desc} onChange={this.actualizaDesc}></input>
                    </form>   
                </CuerpoModal>
                <PieModal>
                    <PieBotonesAgregar/>
                </PieModal>
            </Modal>
        )
    }
}
