import React, { Component } from 'react'
import axios from "axios";
import Modal from '../Compartido/Modal/Modal'
import CuerpoModal from '../Compartido/Modal/CuerpoModal'
import EncabezadoModal from '../Compartido/Modal/EncabezadoModal'
import PieModal from '../Compartido/Modal/PieModal'
import PieBotonesOpciones from '../Compartido/Modal/PieBotonesOpciones'
import MapaEditor from '../Compartido/MapaEditor';
import { rutaBase } from '../../RutaDB'

export default class TarjetaDispositivo extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: "",
            titulo: "",
            desc: "",
            ubicacion: [],
            mapa: ""
        };
    }
    mostrarModal(){
        var modal = document.getElementById('modal-tarjeta');
        modal.addEventListener('shown.bs.modal', (event) =>{
            var button = event.relatedTarget;
            this.setState({
                id: button.getAttribute('data-bs-id'),
                mapa : []
            });
            axios.get(rutaBase() + "/dispositivos/" + this.state.id)
            .then(res => {
                this.setState({
                    titulo: res.data.titulo,
                    desc: res.data.desc,
                    ubicacion: res.data.ubicacion,
                    mapa : [<MapaEditor ubicacion={res.data.ubicacion} parentCallback={this.callbackFunction}/>]
                });
            });
        })
    }
    componentDidMount(){
        this.mostrarModal();
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
    handleUpdate = (event) => {
        event.preventDefault();
        const datos = {
            titulo: this.state.titulo,
            desc: this.state.desc,
            ubicacion: this.state.ubicacion
        };
        axios
          .patch(rutaBase() + "/dispositivos/" + this.state.id,  {datos} )
          .then((res) => {
            console.log(res);
            console.log(res.data);
            window.location.replace("/Dispositivos");
          });
      };
      handleDelete = (event) => {
        event.preventDefault();
        axios
          .delete(rutaBase() + "/dispositivos/" + this.state.id)
          .then((res) => {
              if(res.data.message){
                window.location.replace("/Dispositivos");
              }
              else{
                  alert("¡El dispositivo está asigando a un área!\n\nReemplace el dispostivo en área o borre el área para continuar.");
              }
          });
      };
    render() {
        return (
            <Modal tipo="tarjeta">
                <EncabezadoModal>Opciones del dispositivo</EncabezadoModal>
                <CuerpoModal>
                    <form id="form-actualizar" onSubmit={this.handleUpdate}>
                        <h6 className="mb-2">Nombre</h6>
                        <input className="form-control mb-3" type="text" name="titulo" value={this.state.titulo} onChange={this.actualizaTitulo}></input>
                        <h6 className="mb-2">Descripción</h6>
                        <input className="form-control mb-3" type="text" name="desc" value={this.state.desc} onChange={this.actualizaDesc}></input>
                    </form>
                    <h6 id="ubicacion" className="mb-2">Ubicación</h6>
                    <div className="container d-flex flex-fill p-0">
                        {this.state.mapa}
                    </div>
                    <form id="form-borrar" onSubmit={this.handleDelete}></form> 
                </CuerpoModal>
                <PieModal>
                    <PieBotonesOpciones/>
                </PieModal>
            </Modal>
        )
    }
}
