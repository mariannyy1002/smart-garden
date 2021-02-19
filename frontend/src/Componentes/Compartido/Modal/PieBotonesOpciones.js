import React, { Component } from 'react'

export default class PieBotonesOpciones extends Component {
    render() {
        return (
            <>
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"><i className="me-2 fas fa-times"></i>Cancelar</button>
                <div class="btn-group dropup">
                    <button type="button" class="btn btn-danger rounded" data-bs-toggle="dropdown">
                        <i className="me-2 fas fa-trash-alt"></i>Borrar
                    </button>
                    <ul class="dropdown-menu dropdown-menu-center border-0 shadow-lg mb-5 p-3">
                        <li><p class="font-weight-bold text-center">¿Borrar de forma permanente?</p></li>
                        <li><hr class="dropdown-divider border-0"></hr></li>
                        <li><a class="btn btn-outline-danger border-0 col text-left ps-3" href="#"><i className="me-2 fas fa-check"></i>Sí</a></li>
                        <li><a class="btn btn-outline-secondary border-0 col text-left ps-3" href="#"><i className="me-2 fas fa-times"></i> No</a></li>
                    </ul>
                </div>
                <button type="button" className="btn btn-success"><i className="me-2 fas fa-save"></i>Guardar cambios</button>
            </>
        )
    }
}
