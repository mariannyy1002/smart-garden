import React, { Component } from 'react'

export default class EncabezadoModal extends Component {
    render() {
        return (
            <div className="modal-header py-4 pl-0">
                <h4 className="modal-title px-lg-5 px-md-4 px-sm-3 px-2">{this.props.children}</h4>
                <button type="button" class="btn-close mt-1 me-lg-4 me-md-3 me-sm-2 me-1 px-1" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
        )
    }
}
