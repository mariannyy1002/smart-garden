import React, { Component } from 'react'

export default class PieBotonesAgregar extends Component {
    render() {
        return (
            <>
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"><i className="me-2 fas fa-times"></i>Cancelar</button>
              <button type="submit" form="form-agregar" className="btn btn-success"><i className="me-2 fas fa-plus"></i>Agregar</button>  
            </>
        )
    }
}
