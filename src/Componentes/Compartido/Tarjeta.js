import React, { Component } from 'react'

export default class Tarjeta extends Component {
    render() {
        return (
            <div className="card text-white mb-2" style={{backgroundColor: "#50ab65"}}>
                <div className="d-flex align-items-center p-3">
                    <h5 className="card-text p-2 bd-highlight ml-1 mb-0">{this.props.titulo}</h5>
                    <h6 className="card-text p-2 bd-highlight mb-0 font-weight-light col-3">{this.props.desc}</h6>
                    <h5 className="card-text p-2 bd-highlight mb-0 flex-grow-1 text-center">{this.props.alertas}</h5>
                    <h5 className="card-text p-2 bd-highlight mb-0 ml-5">{this.props.temp}</h5>
                    <h5 className="card-text p-2 bd-highlight mb-0 ml-5">{this.props.hum}</h5>
                    <h5 className="card-text p-2 bd-highlight mb-0 ml-5">{this.props.luz}</h5>
                    <h6 className="card-text p-2 bd-highlight ml-6">⚙️</h6>
                </div>
            </div>
        )
    }
}
