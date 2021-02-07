import React, { Component } from 'react'

export default class Titulo extends Component {
    render() {
        return (
            <div className="d-flex flex-container p-2 pl-4 align-items-center" style={{backgroundColor: "#dddddd"}}>
                <h1 className="p-2 bd-highlight mb-0">{this.props.titulo}</h1>
                <h4 className="p-2 bd-highlight font-weight-light mb-0">{this.props.desc}</h4>
                <h1 className="p-2 flex-grow-1 bd-highlight ml-5 mb-0">{this.props.alertas}</h1>
                <h1 className="p-2 mr-3 mt-2 bd-highlight btn btn-secondary text-center font-weight-bold">+ Agregar {this.props.lugar}</h1>
            </div>
        )
    }
}
