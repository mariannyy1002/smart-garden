import React, { Component } from 'react'
import Modal from '../Compartido/Modal/Modal'
import CuerpoModal from '../Compartido/Modal/CuerpoModal'
import EncabezadoModal from '../Compartido/Modal/EncabezadoModal'
import PieModal from '../Compartido/Modal/PieModal'

export default class TarjetaDispositivo extends Component {
    render() {
        return (
            <Modal tipo="tarjeta">
                <EncabezadoModal>Opciones del dispositivo</EncabezadoModal>
                <CuerpoModal>
                    <form>
                        <h6 className="mb-2">Nombre</h6>
                        <input id="titulo" className="form-control mb-3" type="text" name="titulo" value="" value={this.props.searchString} onchange={this.handleChange}></input>
                        <h6 className="mb-2">Descripción</h6>
                        <input id="desc" className="form-control mb-3" type="text" name="desc" value="" value={this.props.searchString} onchange={this.handleChange}></input>
                    </form>
                    <h6 className="mb-2">Ubicación</h6>
                    <div className="container d-flex flex-fill p-0">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3420.6064083683277!2d-110.30141720229486!3d30.98146413067978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2smx!4v1612753693349!5m2!1sen!2smx" className="col p-0 m-0" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </div> 
                </CuerpoModal>
                <PieModal>
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"><i className="me-2 fas fa-times"></i>Cancelar</button>
                    <button type="button" className="btn btn-danger"><i className="me-2 fas fa-trash-alt"></i>Borrar</button>
                    <button type="button" className="btn btn-success"><i className="me-2 fas fa-save"></i>Guardar cambios</button>
                </PieModal>
            </Modal>
        )
    }
}
