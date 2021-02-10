import React, { Component } from 'react'
import Modal from '../Compartido/Modal/Modal'
import CuerpoModal from '../Compartido/Modal/CuerpoModal'
import EncabezadoModal from '../Compartido/Modal/EncabezadoModal'
import PieModal from '../Compartido/Modal/PieModal'

export default class AgregarJardin extends Component {
    render() {
        return (
            <Modal>
                <EncabezadoModal>Agregar jardín</EncabezadoModal>
                <CuerpoModal>
                    
                </CuerpoModal>
                <PieModal>
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                    <button type="button" className="btn btn-success">+ Agregar</button>
                </PieModal>
            </Modal>
        )
    }
}
