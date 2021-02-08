import React, { Component } from 'react'

export default class Datos extends Component {
    render() {
        return (
            <div className="container p-4">
                <div className="card" style={{backgroundColor:"#eeeeee"}}>
                    <div className="d-flex justify-content-evenly p-3">
                        <h5 className="card-text p-2 bd-highlight mb-0">{this.props.alertas}</h5>
                        <h5 className="card-text p-2 bd-highlight mb-0">{this.props.temp}</h5>
                        <h5 className="card-text p-2 bd-highlight mb-0">{this.props.hum}</h5>
                        <h5 className="card-text p-2 bd-highlight mb-0">{this.props.luz}</h5>
                    </div>
                </div>
            </div>
        )
    }
}
