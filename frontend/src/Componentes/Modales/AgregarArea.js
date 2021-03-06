import React, { Component } from 'react'
import axios from "axios";
import Modal from '../Compartido/Modal/Modal'
import CuerpoModal from '../Compartido/Modal/CuerpoModal'
import EncabezadoModal from '../Compartido/Modal/EncabezadoModal'
import PieModal from '../Compartido/Modal/PieModal'
import PieBotonesAgregar from '../Compartido/Modal/PieBotonesAgregar';
import { rutaBase } from '../../RutaDB'

export default class AgregarArea extends Component {
    constructor(props){
        super(props);
        this.state = {
            titulo: "",
            desc: "",
            dispositivo: "",
            idpadre: this.props.idpadre,
            listaDisp: []
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
            .post(rutaBase() + "/areas", { datos })
            .then((res) => {
            console.log(res);
            console.log(res.data);
            window.location.replace("/Jardin/" + this.state.idpadre);
            });
    };
    componentDidMount(){
        axios.get(rutaBase() + "/dispositivos")
        .then(res => {
            this.setState({ listaDisp: res.data });
        });
    }
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
                            <option selected disabled>Seleccione un dispositivo</option>
                            {this.state.listaDisp.map(item => (
                                <option value={item._id}>{item.titulo}</option>
                            ))}
                        </select>
                    </form>   
                </CuerpoModal>
                <PieModal>
                    <PieBotonesAgregar/>
                </PieModal>
            </Modal>
        )
    }
}
