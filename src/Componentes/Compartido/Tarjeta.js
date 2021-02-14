import React, { Component } from 'react'

export default class Tarjeta extends Component {
    render() {
        return (
            <div className="card text-white mb-2">
                <div className="d-flex align-items-center px-2 py-3 btn btn-warning">
                    <h5 className="card-text p-2 col-2 mb-0">{this.props.titulo}</h5>
                    <h6 className="card-text p-2 col-2 mb-0 font-weight-light">{this.props.desc}</h6>
                    <h5 className="card-text p-2 col-2 mb-0 ">{this.props.alertas}</h5>
                    <h5 className="card-text p-2 col-2 mb-0 ">{this.props.temp}</h5>
                    <h5 className="card-text p-2 col-2 mb-0 ">{this.props.hum}</h5>
                    <h5 className="card-text p-2 col-2 mb-0 ">{this.props.luz}</h5>
                    {/*<h6 className="card-text p-2  ml-6">⚙️</h6>*/}
                </div>
            </div>
        )
    }
}
