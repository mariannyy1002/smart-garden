import React, { Component } from 'react'
import axios from "axios";
import Modal from '../Compartido/Modal/Modal'
import CuerpoModal from '../Compartido/Modal/CuerpoModal'
import EncabezadoModal from '../Compartido/Modal/EncabezadoModal'
import PieModal from '../Compartido/Modal/PieModal'
import PieBotonesOpciones from '../Compartido/Modal/PieBotonesOpciones'
import { rutaBase } from '../../RutaDB'

export default class OpcionesJardin extends Component {
    constructor(props){
        super(props);
        this.state = {
            titulo: "",
            desc: "",
        };
    }
    mostrarJardin(){
        axios.get(rutaBase() + "/jardines/" + this.props.id)
        .then(res => {
            this.setState({
                titulo: res.data.titulo,
                desc: res.data.desc
            });
        });
    }
    componentDidMount() {
        this.mostrarJardin();
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
    handleUpdate = (event) => {
        event.preventDefault();
        const datos = {
            titulo: this.state.titulo,
            desc: this.state.desc,
        };
        axios
          .patch(rutaBase() + "/jardines/" + this.props.id,  {datos} )
          .then((res) => {
            console.log(res);
            console.log(res.data);
            window.location.replace("/Jardin/" + res.data._id);
          });
      };
      handleDelete = (event) => {
        event.preventDefault();
        axios
          .delete(rutaBase() + "/jardines/" + this.props.id)
          .then((res) => {
            window.location.replace("/Jardines");
          });
      };
    render() {
        return (
            <Modal tipo="opciones">
                <EncabezadoModal>Opciones de jardín</EncabezadoModal>
                <CuerpoModal>
                    <form id="form-actualizar" onSubmit={this.handleUpdate}>
                        <h6 className="mb-2">Nombre</h6>
                        <input className="form-control mb-3" type="text" name="titulo" value={this.state.titulo} onChange={this.actualizaTitulo}></input>
                        <h6 className="mb-2">Descripción</h6>
                        <input className="form-control mb-3" type="text" name="desc" value={this.state.desc} onChange={this.actualizaDesc}></input>
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
