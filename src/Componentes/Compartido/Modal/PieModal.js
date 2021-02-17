import React, { Component } from 'react'

export default class PieModal extends Component {
    render() {
        return (
            <div class="modal-footer py-1 px-lg-5 px-md-4 px-sm-3 px-2" id="pie-modal">
                {this.props.children}
            </div>
        )
    }
}
