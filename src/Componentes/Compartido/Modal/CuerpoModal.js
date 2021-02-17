import React, { Component } from 'react'

export default class CuerpoModal extends Component {
    render() {
        return (
            <div className="modal-body py-4 px-lg-5 px-md-4 px-sm-3 px-2">
                <div className="d-flex flex-column h-100 flex-fill">
                    {this.props.children}
                </div>
            </div>
        )
    }
}
