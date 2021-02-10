import React, { Component } from 'react'

export default class EncabezadoModal extends Component {
    render() {
        return (
            <div className="modal-header py-2 pl-0">
                <h5 className="modal-title px-lg-5 px-md-4 px-sm-3 px-2">{this.props.children}</h5>
                <button type="button" class="btn-close mt-0" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
        )
    }
}
