import React, { Component } from 'react'

export default class Modal extends Component {
    render() {
        return (
            <div class="modal fade" id="modal" tabindex="-1" role="dialog" data-backdrop="static" data-keyboard="false" aria-hidden="true"  style={{overflowX:"hidden"}}>
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg py-1 px-lg-5 px-md-4 px-sm-3 ">
                    <div class="modal-content h-100" id="contenido-modal">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}
