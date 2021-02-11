import React, { Component } from 'react'
import Modal from '../Compartido/Modal/Modal'
import CuerpoModal from '../Compartido/Modal/CuerpoModal'
import EncabezadoModal from '../Compartido/Modal/EncabezadoModal'
import PieModal from '../Compartido/Modal/PieModal'

export default class AgregarPlanta extends Component {
    render() {
        return (
            <Modal>
                <EncabezadoModal>Agregar planta</EncabezadoModal>
                <CuerpoModal>
                    <form>
                        <h6 className="mb-2">Nombre</h6>
                        <input className="form-control mb-3" type="text" name="titulo" value="" value={this.props.searchString} onchange={this.handleChange}></input>
                        <h6 className="mb-2">Descripción</h6>
                        <input className="form-control mb-3" type="text" name="desc" value="" value={this.props.searchString} onchange={this.handleChange}></input>
                        <h6 className="mb-2">Temperatura</h6>
                        <div className="row">
                            <div className="col">
                                <input className="form-control mb-3" type="number" name="tempMin" value="" placeholder="Mínima" value={this.props.searchString} onchange={this.handleChange}></input>
                            </div>
                            <div className="col">
                                <input className="form-control mb-3" type="number" name="tempMax" value="" placeholder="Máxima" value={this.props.searchString} onchange={this.handleChange}></input>
                            </div>
                        </div>
                        <h6 className="mb-2">Humedad</h6>
                        <div className="row">
                            <div className="col">
                                <input className="form-control mb-3" type="number" name="humMin" value="" placeholder="Mínima" value={this.props.searchString} onchange={this.handleChange}></input>
                            </div>
                            <div className="col">
                                <input className="form-control mb-3" type="number" name="humMax" value="" placeholder="Máxima" value={this.props.searchString} onchange={this.handleChange}></input>
                            </div>
                        </div>
                        <h6 className="mb-2">Luz</h6>
                        <div className="row">
                            <div className="col">
                                <select className="form-select mb-3" name="luzMin">
                                    <option selected>Mínima</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                    <option value="3">Four</option>
                                </select>
                            </div>
                            <div className="col">
                                <select className="form-select mb-3" name="luzMax">
                                    <option selected>Máxima</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                    <option value="3">Four</option>
                                </select>
                            </div>
                        </div>
                    </form>   
                </CuerpoModal>
                <PieModal>
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                    <button type="button" className="btn btn-success">+ Agregar</button>
                </PieModal>
            </Modal>
        )
    }
}
