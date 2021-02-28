import React, { Component } from 'react'
import axios from "axios";
import Modal from '../Compartido/Modal/Modal'
import CuerpoModal from '../Compartido/Modal/CuerpoModal'
import EncabezadoModal from '../Compartido/Modal/EncabezadoModal'
import PieModal from '../Compartido/Modal/PieModal'
import PieBotonesOpciones from '../Compartido/Modal/PieBotonesOpciones'
import { rutaBase } from '../../RutaDB'

export default class OpcionesArea extends Component {
    constructor(props){
        super(props);
        this.state = {
            titulo: "",
            desc: "",
            dispositivo : "",
            listaDisp: []
        };
    }
    mostrarArea(){
        axios.get(rutaBase() + "/areas/" + this.props.idJ + "/" + this.props.idA)
        .then(res => {
            this.setState({
                titulo: res.data.titulo,
                desc: res.data.desc,
                dispositivo : res.data.dispositivo
            });
        });
    }
    mostrarDispositivos(){
        axios.get(rutaBase() + "/dispositivos")
        .then(res => {
            this.setState({ listaDisp: res.data });
        });
    }
    componentDidMount() {
        this.mostrarArea();
        this.mostrarDispositivos();
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
    handleUpdate = (event) => {
        event.preventDefault();
        const datos = {
            titulo: this.state.titulo,
            desc: this.state.desc,
            dispositivo : this.state.dispositivo
        };
        axios
          .patch(rutaBase() + "/areas/" + this.props.idA,  {datos} )
          .then((res) => {
            console.log(res);
            console.log(res.data);
            window.location.replace("/Area/" + res.data.idpadre + "/" + res.data._id);
          });
      };
      handleDelete = (event) => {
        event.preventDefault();
        axios
          .delete(rutaBase() + "/areas/" + this.props.idA)
          .then((res) => {
            window.location.replace("/Jardin/" + res.data.idpadre);
          });
      };
    dispSeleccionado(disp){
        if (disp == this.state.dispositivo._id){
            return true;
        }
    }
    render() {
        return (
            <Modal tipo="opciones">
                <EncabezadoModal>Opciones de área</EncabezadoModal>
                <CuerpoModal>
                    <form id="form-actualizar" onSubmit={this.handleUpdate}>
                        <h6 className="mb-2">Nombre</h6>
                        <input className="form-control mb-3" type="text" name="titulo" value={this.state.titulo} onChange={this.actualizaTitulo}></input>
                        <h6 className="mb-2">Descripción</h6>
                        <input className="form-control mb-3" type="text" name="desc" value={this.state.desc} onChange={this.actualizaDesc}></input>
                        <h6 className="mb-2">Dispositivo</h6>
                        <select className="form-select mb-3" name="dispositivo" onChange={this.actualizaDispositivo}>
                            <option disabled>Seleccione un dispositivo</option>
                            {this.state.listaDisp.map(item => (
                                <option selected={this.dispSeleccionado(item._id)} value={item._id}>{item.titulo}</option>
                            ))}
                        </select>
                    </form>
                    <form id="form-borrar" onSubmit={this.handleDelete}></form>   
                </CuerpoModal>
                <PieModal>
                    <PieBotonesOpciones/>
                </PieModal>
            </Modal>
        )
    }
}
