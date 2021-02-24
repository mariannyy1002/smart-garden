import React, { Component } from 'react'

export default class Datos extends Component {
    render() {
        return (
            <div id="datos" className="card text-white mb-2 border-0">
                <div className="d-flex py-3 align-items-center btn disabled" style={{backgroundColor:"#eeeeee", opacity:1}}>
                    <h5 className="card-text p-2 col-3 mb-0">{this.props.fechaHora}</h5>
                    <h5 className="card-text p-2 col-3 mb-0">{this.props.temp}</h5>
                    <h5 className="card-text p-2 col-3 mb-0">{this.props.hum}</h5>
                    <h5 className="card-text p-2 col-3 mb-0">{this.props.luz}</h5>
                </div>
            </div>
        )
    }
}
