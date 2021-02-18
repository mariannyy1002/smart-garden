import React, { Component } from 'react'
import axios from "axios";
import Modal from '../Compartido/Modal/Modal'
import CuerpoModal from '../Compartido/Modal/CuerpoModal'
import EncabezadoModal from '../Compartido/Modal/EncabezadoModal'
import PieModal from '../Compartido/Modal/PieModal'

export default class AgregarArea extends Component {
    constructor(props){
        super(props);
        this.state = {
            titulo: "",
            desc: "",
            dispositivo: "",
            idpadre: this.props.idpadre,
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
    actualizaDispositivo = (event) => {
        this.setState({
          dispositivo: event.target.value,
        });
    };
    handleSubmit = (event) => {
        event.preventDefault();
        const datos = {
            titulo: this.state.titulo,
            desc: this.state.desc,
            dispositivo: this.state.dispositivo,
            idpadre: this.state.idpadre,
        };
        axios
          .post("http://localhost:5000/agregararea", { datos })
          .then((res) => {
            console.log(res);
            console.log(res.data);
            window.location.replace("/Jardin/" + this.state.idpadre);
          });
      };
    render() {
        return (
            <Modal tipo="agregar">
                <EncabezadoModal>Agregar área</EncabezadoModal>
                <CuerpoModal>
                    <form id="form-agregar" onSubmit={this.handleSubmit}>
                        <h6 className="mb-2">Nombre</h6>
                        <input className="form-control mb-3" type="text" name="titulo" value={this.state.titulo} onChange={this.actualizaTitulo}></input>
                        <h6 className="mb-2">Descripción</h6>
                        <input className="form-control mb-3" type="text" name="desc" value={this.state.desc} onChange={this.actualizaDesc}></input>
                        <h6 className="mb-2">Dispositivo</h6>
                        <select className="form-select mb-3" name="dispositivo" onChange={this.actualizaDispositivo}>
                            <option selected>Seleccione un dispositivo</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </form>   
                </CuerpoModal>
                <PieModal>
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"><i className="me-2 fas fa-times"></i>Cancelar</button>
                    <button type="submit" form="form-agregar" className="btn btn-success"><i className="me-2 fas fa-plus"></i>Agregar</button>
                </PieModal>
            </Modal>
        )
    }
}
