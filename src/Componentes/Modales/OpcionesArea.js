import React, { Component } from 'react'
import Modal from '../Compartido/Modal/Modal'
import CuerpoModal from '../Compartido/Modal/CuerpoModal'
import EncabezadoModal from '../Compartido/Modal/EncabezadoModal'
import PieModal from '../Compartido/Modal/PieModal'

export default class OpcionesArea extends Component {
    render() {
        return (
            <Modal tipo="opciones">
                <EncabezadoModal>Opciones de área</EncabezadoModal>
                <CuerpoModal>
                    <form>
                        <h6 className="mb-2">Nombre</h6>
                        <input className="form-control mb-3" type="text" name="titulo" value="" value={this.props.titulo} onchange={this.handleChange}></input>
                        <h6 className="mb-2">Descripción</h6>
                        <input className="form-control mb-3" type="text" name="desc" value="" value={this.props.desc} onchange={this.handleChange}></input>
                        <h6 className="mb-2">Dispositivo</h6>
                        <select className="form-select mb-3" name="dispositivo">
                            <option selected>Seleccione un dispositivo</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </form>   
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
